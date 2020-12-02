<template>
  <div class="container music">
    <nuxt-link
      to="/"
      class="btn btn-link text-secondary d-print-none py-3 ml-n4"
    >
      <fa :icon="['far', 'arrow-left']" class="mr-2" />Home
    </nuxt-link>
    <div
      class="bg-light rounded-lg"
      style="box-shadow:0 0 5rem rgba(0,0,0,.2) inset"
    >
      <picture>
        <source
          :srcset="require('~/assets/img/headshot.webp')"
          type="image/webp"
        />
        <source
          :srcset="require('~/assets/img/headshot.png')"
          type="image/png"
        />

        <img
          :src="require('~/assets/img/headshot.png')"
          alt=""
          class="pt-3 mx-auto d-block pl-4"
          style="pointer-events:none;height:15rem"
        />
      </picture>
    </div>
    <h1 class="text-center mt-5 mb-6">
      Music by<br class="d-block d-md-none" />
      Curt Grimes
    </h1>
    <div class="row">
      <div class="col-sm-8 col-md-4 mb-4 mb-md-0">
        <img
          src="~/assets/img/music/christmas-songs-on-piano.jpg"
          class="w-100 shadow rounded-lg"
          alt="Christmas Songs on Piano by Curt Grimes"
        />
      </div>
      <div class="col-md-8">
        <h2 class="h3">Christmas Songs on Piano</h2>
        <p>2020</p>
        <div class="font-italic mb-4">
          (Coming soon)
          <a href="#" class="mr-2 d-inline-block disabled">Spotify</a>
          <a href="#" class="mr-2 d-inline-block disabled">Apple Music</a>
          <a href="#" class="mr-2 d-inline-block disabled">YouTube Music</a>
          <a href="#" class="mr-2 d-inline-block disabled">Amazon</a>
          <a href="#" class="mr-2 d-inline-block disabled">YouTube</a>
          <a href="#" class="mr-2 d-inline-block disabled">Pandora</a>
          <a href="#" class="mr-2 d-inline-block disabled">Deezer</a>
        </div>
        <audio-preview
          name="The First Noel"
          src="/music/christmas-songs-on-piano/01-the-first-noel.mp3"
          full-duration="4:19"
          ref="track01"
          @ended="$refs.track02.$refs.audio.play()"
        />
        <audio-preview
          name="O Come, All Ye Faithful"
          src="/music/christmas-songs-on-piano/02-o-come-all-ye-faithful.mp3"
          full-duration="3:14"
          ref="track02"
          @ended="$refs.track03.$refs.audio.play()"
        />
        <audio-preview
          name="O Come, O Come, Emmanuel"
          src="/music/christmas-songs-on-piano/03-o-come-o-come-emmanuel.mp3"
          full-duration="2:41"
          ref="track03"
          @ended="$refs.track04.$refs.audio.play()"
        />
        <audio-preview
          name="What Child Is This?"
          src="/music/christmas-songs-on-piano/04-what-child-is-this.mp3"
          full-duration="3:54"
          ref="track04"
          @ended="$refs.track05.$refs.audio.play()"
        />
        <audio-preview
          name="O Holy Night"
          src="/music/christmas-songs-on-piano/05-o-holy-night.mp3"
          full-duration="4:13"
          ref="track05"
          @ended="$refs.track06.$refs.audio.play()"
        />
        <audio-preview
          name="Silent Night"
          src="/music/christmas-songs-on-piano/06-silent-night.mp3"
          full-duration="2:58"
          ref="track06"
          @ended="$refs.track07.$refs.audio.play()"
        />
        <audio-preview
          name="Angels We Have Heard on High"
          src="/music/christmas-songs-on-piano/07-angels-we-have-heard-on-high.mp3"
          full-duration="2:46"
          ref="track07"
          @ended="$refs.track08.$refs.audio.play()"
        />
        <audio-preview
          name="In the Bleak Midwinter"
          src="/music/christmas-songs-on-piano/08-in-the-bleak-midwinter.mp3"
          full-duration="1:46"
          ref="track08"
          @ended="$refs.track09.$refs.audio.play()"
        />
        <audio-preview
          name="I Heard the Bells on Christmas Day"
          src="/music/christmas-songs-on-piano/09-i-heard-the-bells-on-christmas-day.mp3"
          full-duration="1:43"
          ref="track09"
          @ended="$refs.track10.$refs.audio.play()"
        />
        <audio-preview
          name="Joy to the World"
          src="/music/christmas-songs-on-piano/10-joy-to-the-world.mp3"
          full-duration="2:29"
          ref="track10"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AudioPreview from "@/components/AudioPreview";

export default {
  head() {
    return {
      title: "Music - Curt Grimes",
      bodyAttrs: {
        class: "bg-white"
      },
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Music by Curt Grimes"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://curtgrimes.com/music"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Listen to music by Curt Grimes."
        },
        {
          hid: "description",
          name: "description",
          content: "Music by Curt Grimes"
        },
        {
          hid: "theme-color",
          name: "theme-color",
          content: "#ffffff"
        }
      ]
    };
  },
  components: {
    AudioPreview
  }
};
</script>
