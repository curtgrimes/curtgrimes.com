<template>
  <div class="bg-resume py-lg-6">
    <div
      class="resume bg-white col-lg-9 col-xl-8 mx-auto shadow-sm px-lg-5 pb-4"
    >
      <div ref="before-sticky-header" />
      <div
        class="d-print-none mx-lg-n5 mx-n3 sticky-top resume-sticky-bg d-flex sticky-border-bottom"
        :class="headerIsSticky ? 'is-sticky' : ''"
      >
        <nuxt-link
          to="/"
          class="btn btn-link text-secondary d-print-none resume-button px-4 py-3 mr-auto"
        >
          <fa :icon="['far', 'arrow-left']" class="mr-2" />Home
        </nuxt-link>
        <button
          type="button"
          class="btn btn-link text-secondary d-print-none resume-button px-4 py-3"
          @click="print()"
        >
          <fa :icon="['far', 'print']" class="mr-2" />Print
        </button>
      </div>

      <h1 class="display-4 text-center mt-3 mt-sm-0">
        Curt Grimes
      </h1>
      <p class="lead text-center">
        <span v-if="$route.query.phone" class="d-block">{{
          $route.query.phone
        }}</span>
        <span class="d-block">{{
          $route.query.location || "Chicago, IL"
        }}</span>
        <!-- <span class="d-none d-sm-inline">&middot;</span> -->
        <!-- <br class="d-sm-none" /> -->
        <a href="mailto:curt@curtgrimes.com" class="no-print-url"
          >curt@curtgrimes.com</a
        >
        <span class="d-none d-print-inline">
          &middot;
          <a href="https://curtgrimes.com" class="no-print-url"
            >curtgrimes.com</a
          >
        </span>
      </p>

      <resume-heading>Experience</resume-heading>

      <resume-item>
        <template #title>Front-End Software Engineer</template>
        <template #company>Nokia</template>
        <template #dates>Jan. 2020 &ndash; Present</template>
        <template #location>Naperville, IL</template>
        <p>
          Work in a small team to architect, design and rapidly prototype
          complex, highly interactive GUI solutions that integrate frontend UI
          design along with the backend data engines in the 5G and internet of
          things (IoT) domains.
        </p>
        <ul class="pl-3">
          <li>
            Use Vue, React, Node.js, JavaScript, CSS3, HTML5, Mapbox, and Ionic
            Framework to implement highly interactive user interfaces for the
            web and mobile devices.
          </li>
          <li>
            Demonstrate good understanding of cloud/container based applications
            with Kubernetes, Helm, and Docker.
          </li>
          <li>
            Perform distributed application development, debugging,
            troubleshooting and abstract problem-solving.
          </li>
          <li>
            Design and implement vector graphics elements of cutting-edge user
            interfaces.
          </li>
        </ul>
      </resume-item>

      <resume-item>
        <template #title
          >Assistant Director, Web and Digital Communications</template
        >
        <template #company>Northern Illinois University</template>
        <template #dates>Apr. 2019 &ndash; Jan. 2020</template>
        <template #location>DeKalb, IL</template>
        <p>
          Directed all aspects of the research, planning, development,
          documentation, implementation and support of existing and new web
          sites and other departmental applications for Housing and Residential
          Services; directed all aspects of creating, producing, and
          distributing electronic and/or print communications; lead social media
          activities.
        </p>
        <ul class="pl-3">
          <li>
            Designed and maintained the departmental web presence using HTML,
            JavaScript, CSS, and Vue.
          </li>
          <li>
            Developed and supported applications written using technologies like
            PHP, HTML, JavaScript, CSS, jQuery, JSON, and REST APIs.
          </li>
          <li>
            Recommended modifications to departmental software applications to
            meet user needs.
          </li>
          <li>
            Developed training materials and technical documentation for
            existing and new applications.
          </li>
          <li>
            Oversaw the development, editing, and publishing of department
            publications including digital materials, multimedia projects,
            applicable print materials, and web pages for various audiences
            including prospective students, residents, parents, and university
            staff.
          </li>
        </ul>
      </resume-item>

      <resume-item>
        <template #title>Application Development Team Manager</template>
        <template #company>Northern Illinois University</template>
        <template #dates>Aug. 2013 &ndash; March 2019</template>
        <template #location>DeKalb, IL</template>
        <p>
          Analyzed, designed, developed, and implemented custom web-based and
          other applications for Housing and Residential Services based on the
          department's business practices and technical requirements.
        </p>
        <ul class="pl-3">
          <li>
            Developed application specifications and project scope, and
            collaborate with the user to ensure that requirements are met.
          </li>
          <li>Established programming techniques and procedures.</li>
          <li>
            Recommended third-party software to meet user needs.
          </li>
          <li>
            Oversaw the development, editing, and publishing of a broad-based
            series of department publications including print and digital
            materials, multimedia projects, and web pages for various audiences
            including prospective students, residents, parents, and university
            staff.
          </li>
          <li>
            Developed training materials and technical documentation for
            existing and new applications.
          </li>
          <li>Hired, trained, and evaluated student technical staff.</li>
        </ul>
      </resume-item>

      <resume-heading>Personal Project</resume-heading>

      <resume-item>
        <template #title>Web Captioner</template>
        <template #dates>2016 &ndash; Present</template>

        <p>
          <a href="https://webcaptioner.com">Web Captioner</a> is a web-based
          speech-to-text accessibility service I develop and maintain in my free
          time.
        </p>
        <ul>
          <li>
            Engineered a web-based speech-to-text service using technologies
            including the web speech API, Nuxt, Vue, Node.js, Redis, and
            Bootstrap.
          </li>
          <li>
            Enabled
            <a href="https://curtgrimes.com/gitlab-fargate"
              >continuous deployment from GitLab to AWS Fargate</a
            >.
          </li>
          <li>
            Maintain high availability with 10,000 weekly users and over 40,000
            account registrations while balancing affordability with AWS Fargate
            and ElastiCache.
          </li>
          <li>
            Integrate with APIs from Zoom, YouTube, OBS, vMix, and Dropbox to
            store or send live caption data to these external services.
          </li>
          <li>
            Write
            <a href="https://webcaptioner.com/help">support articles</a> for
            users with different skill levels.
          </li>
          <li>
            Continuously gather feedback from users and use feedback to guide
            project planning.
          </li>
        </ul>
      </resume-item>

      <resume-heading>Education</resume-heading>

      <resume-item>
        <template #title>Master of Science in Computer Science</template>
        <template #company>Northern Illinois University</template>
        <template #dates>Aug. 2013 &ndash; May 2016</template>
        <template #location>DeKalb, IL</template>
        <p>
          Relevant coursework: Systems Design and Analysis, Database Concepts,
          Computer Networks, Android Mobile Device Programming
        </p>
      </resume-item>

      <resume-item>
        <template #title>Bachelor of Science in Computer Science</template>
        <template #company>Northern Illinois University</template>
        <template #dates>Aug. 2011 &ndash; May 2013</template>
        <template #location>DeKalb, IL</template>
        <p>
          Relevant coursework: Software Engineering, Data Structures and
          Algorithm Analysis in C++, Unix System, Databases, iOS Mobile Device
          Programming
        </p>
      </resume-item>

      <resume-heading>Skills and Software</resume-heading>

      <resume-item>
        <div class="small font-italic">
          React, Vue, Node.js, Sass, Tailwindcss, Jest, Docker, Bootstrap,
          Next.js, Nuxt.js, Express.js, PHP, MySQL, Redis, WebSockets, Amazon
          Web Services, Web Speech API, Firebase, Mapbox, D3, Ionic Framework,
          Hugo, HTML5, CSS3, jQuery, WordPress
        </div>
      </resume-item>
    </div>
  </div>
</template>

<script>
import ResumeHeading from "~/components/ResumeHeading";
import ResumeItem from "~/components/ResumeItem";

export default {
  head() {
    return {
      title: "Curt Grimes - Full-Stack Software Engineer - Résumé",
      bodyAttrs: {
        class: "bg-light"
      },
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Curt Grimes - Full-Stack Software Engineer"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://curtgrimes.com/resume"
        },
        {
          hid: "description",
          name: "description",
          content:
            "The résumé for Curt Grimes, a full-stack software engineer located in the northern Illinois area."
        },
        {
          hid: "theme-color",
          name: "theme-color",
          content: "#ffffff"
        }
      ]
    };
  },
  data() {
    return {
      headerIsSticky: false
    };
  },
  components: {
    ResumeHeading,
    ResumeItem
  },
  mounted() {
    this.initStickyTopObserver();
  },
  methods: {
    print() {
      window.print();
    },
    initStickyTopObserver() {
      new IntersectionObserver(records => {
        this.headerIsSticky = records[0] && records[0].isIntersecting === false;
      }).observe(this.$refs["before-sticky-header"]);
    }
  }
};
</script>
