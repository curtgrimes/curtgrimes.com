<template>
  <div class="mb-4">
    <div class="progress audio-preview-progress mb-2" ref="seekBar">
      <div
        class="progress-bar"
        style="transition-duration:0s !important;background-color:#fff"
        role="progressbar"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: playbackPercentage }"
      ></div>
    </div>
    <div class="d-flex">
      <button
        class="btn btn-link d-flex align-items-center p-1 my-n1 mr-auto audio-preview-play-button text-left"
        style="color:inherit"
        @click="$refs.audio.paused ? $refs.audio.play() : $refs.audio.pause()"
      >
        <fa
          :icon="playing ? ['far', 'pause-circle'] : ['far', 'play-circle']"
          aria-label="Play"
          size="lg"
          class="mr-2"
        />
        <h3 class="mb-0" style="padding-top:2px">{{ name }}</h3>
      </button>
      <span class="text-lighter small ml-2">{{ fullDuration }}</span>
    </div>
    <audio
      controls
      @timeupdate="currentSeek = $event.target.currentTime"
      @loadedmetadata="loadedMetadata($event)"
      @play="
        playing = true;
        stopOtherPlayers();
      "
      @pause="playing = false"
      ref="audio"
      class="d-none"
      @ended="$emit('ended')"
    >
      <source :src="src" type="audio/mpeg" />
    </audio>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    src: {
      type: String
    },
    fullDuration: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentSeek: 0,
      duration: 0,
      playing: false
    };
  },
  mounted() {
    this.duration = this.$refs.audio.duration;

    document.addEventListener("otherAudioPlayerStarted", e => {
      if (e.detail.originalAudioPlayer !== this.$refs.audio) {
        if (this.$refs.audio) {
          this.$refs.audio.pause();
          this.$refs.audio.currentTime = 0;
        }
      }
    });

    const calculateNewSeekAfterClickDrag = mouseX => {
      const { left, right } = this.$refs.seekBar.getBoundingClientRect();
      const percentage = (mouseX - left) / (right - left);
      this.$refs.audio.currentTime = this.duration * percentage;
    };

    const seekBarOnMouseMove = event => {
      event.preventDefault(); // prevent dragging from selecting neighboring text
      calculateNewSeekAfterClickDrag(
        event.clientX || event.touches?.[0]?.clientX
      );
    };

    const seekBarOnMouseDown = event => {
      calculateNewSeekAfterClickDrag(
        event.clientX || event.touches?.[0]?.clientX
      );
      document.addEventListener("mousemove", seekBarOnMouseMove, {
        passive: false
      });
      document.addEventListener("touchmove", seekBarOnMouseMove, {
        passive: false
      });

      const onMouseUp = () => {
        document.removeEventListener("mousemove", seekBarOnMouseMove);
        document.removeEventListener("touchmove", seekBarOnMouseMove);
        this.$refs.audio.play();
      };

      document.addEventListener("mouseup", onMouseUp, { once: true });
      document.addEventListener("touchend", onMouseUp, { once: true });
    };

    this.$refs.seekBar.addEventListener("mousedown", seekBarOnMouseDown);
    this.$refs.seekBar.addEventListener("touchstart", seekBarOnMouseDown);
    this.$refs.seekBar.addEventListener("dblclick", () => {
      this.$refs.audio.pause();
    });
  },
  methods: {
    loadedMetadata($event) {
      this.duration = $event.target.duration;
    },
    stopOtherPlayers() {
      document.dispatchEvent(
        new CustomEvent("otherAudioPlayerStarted", {
          detail: { originalAudioPlayer: this.$refs.audio }
        })
      );
    }
  },
  computed: {
    durationFormatted() {
      const minutes = Math.floor(this.duration / 60);
      const seconds = Math.floor(this.duration - minutes * 60);

      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
        2,
        "0"
      )}`;
    },
    playbackPercentage() {
      return this.duration > 0
        ? `${(this.currentSeek / this.duration) * 100}%`
        : `0%`;
    }
  }
};
</script>

<style lang="scss" scoped>
.audio-preview-progress {
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.3);
  height: 0.5rem;
  background-color: rgba(255, 255, 255, 0.3);
  mix-blend-mode: overlay;
}
</style>
