<template>
  <div class="music py-5" style="background: rgb(33 48 165);color: #fff;">
    <section class="container">
      <div class="row">
        <div class="col-sm-8 col-md-4 mb-4 mb-md-0">
          <img
            src="/music/christmas-songs-on-piano/christmas-songs-on-piano.jpg"
            class="w-100 shadow rounded-lg"
            alt="Christmas Songs on Piano by Curt Grimes"
          />
        </div>
        <div class="col-md-8">
          <h2 class="h3">Christmas Songs on Piano</h2>
          <p>Curt Grimes &middot; 2020</p>
          <div class="font-italic mb-4">
            <a
              href="https://www.youtube.com/playlist?list=OLAK5uy_mBeuO9z8bGrWqNZ_ARDWybO_clSz9Pyoc"
              class="mr-1 mb-1 d-inline-block btn btn-light btn-sm pt-2"
              target="_blank"
              ><fa :icon="['fab', 'youtube']" /> YouTube</a
            ><a
              href="https://open.spotify.com/album/4poptTGcE2oZhoQzQhyVgF"
              class="mr-1 mb-1 d-inline-block btn btn-light btn-sm pt-2"
              target="_blank"
            >
              <fa :icon="['fab', 'spotify']" /> Spotify </a
            ><a
              href="https://music.apple.com/us/album/christmas-songs-on-piano/1542899794"
              class="mr-1 mb-1 d-inline-block btn btn-light btn-sm pt-2"
              target="_blank"
              ><fa :icon="['fab', 'apple']" /> Apple Music</a
            ><a
              href="https://music.youtube.com/playlist?list=OLAK5uy_nP5KMBdj2AxnMrsMN93Jlz2nzs6nBw3wc"
              class="mr-1 mb-1 d-inline-block btn btn-light btn-sm pt-2"
              target="_blank"
              ><fa :icon="['fab', 'youtube']" /> YouTube Music</a
            ><a
              href="https://www.amazon.com/gp/product/B08PFVBJ64"
              class="mr-1 mb-1 d-inline-block btn btn-light btn-sm pt-2"
              target="_blank"
              ><fa :icon="['fab', 'amazon']" /> Amazon Music</a
            ><a
              href="https://www.pandora.com/artist/curt-grimes-holiday/christmas-songs-on-piano/ALrhbp97wxfnKqV"
              class="mr-1 mb-1 d-inline-block btn btn-light btn-sm pt-2"
              target="_blank"
              ><img
                src="@/assets/img/icons/pandora.svg"
                alt=""
                class="mr-1"
                style="height:1rem;vertical-align:baseline"
              />Pandora</a
            ><a
              href="https://www.deezer.com/us/album/190484272"
              class="mr-1 mb-1 d-inline-block btn btn-light btn-sm pt-2"
              target="_blank"
              ><fa :icon="['fab', 'deezer']" /> Deezer</a
            >
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
    </section>
  </div>
</template>

<script>
import AudioPreview from "@/components/AudioPreview";

export default {
  scrollToTop: true,
  meta: {
    title: "Christmas Songs on Piano"
  },
  head() {
    return {
      title: "Christmas Songs on Piano - Curt Grimes",
      bodyAttrs: {
        class: "bg-white"
      },
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Christmas Songs on Piano"
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "music.album"
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://curtgrimes.com/music/christmas-songs-on-piano/christmas-songs-on-piano.jpg"
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Curt Grimes"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://curtgrimes.com/music/christmas-songs-on-piano"
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "A collection of 10 Christmas songs on piano played by Curt Grimes."
        },
        {
          hid: "description",
          name: "description",
          content:
            "A collection of 10 Christmas songs on piano played by Curt Grimes."
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
