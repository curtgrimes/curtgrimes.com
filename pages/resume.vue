<template>
  <div class="bg-resume py-lg-6">
    <div
      class="resume bg-white col-lg-9 col-xl-8 mx-auto shadow-sm px-lg-5 pb-4"
    >
      <div ref="before-sticky-header" />
      <div
        class="mx-lg-n5 mx-n3 sticky-top resume-sticky-bg d-flex sticky-border-bottom"
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
      <div class="row">
        <div class="my-print-0 col-pr-12 col-md-11 col-lg-12 mx-auto">
          <h1 class="display-4 text-center mt-3 mt-sm-0">Curt Grimes</h1>
          <p class="lead text-center">
            Chicago, IL<br />
            <!-- <span class="d-none d-sm-inline">&middot;</span> -->
            <!-- <br class="d-sm-none" /> -->
            <a href="mailto:curt@curtgrimes.com">curt@curtgrimes.com</a>
            <span class="d-none d-print-inline">
              &middot;
              <a href="https://curtgrimes.com">curtgrimes.com</a>
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
              complex, highly interactive GUI solutions that integrate frontend
              UI design along with the backend data engines in the 5G and
              internet of things (IoT) domains.
            </p>
            <ul class="pl-3">
              <li>
                Use Vue, React, Node.js, JavaScript, CSS3, HTML5, Mapbox, and
                Ionic Framework to implement highly interactive user interfaces
                for the web and mobile devices.
              </li>
              <li>
                Demonstrate good understanding of cloud/container based
                applications with Kubernetes, Helm, and Docker.
              </li>
              <li>
                Perform distributed application development, debugging,
                troubleshooting and abstract problem-solving.
              </li>
              <li>
                Design and implement vector graphics elements of cutting-edge
                user interfaces.
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
              sites and other departmental applications for Housing and
              Residential Services; directed all aspects of creating, producing,
              and distributing electronic and/or print communications; lead
              social media activities.
            </p>
            <ul class="pl-3">
              <li>
                Designed and maintained the departmental web presence using
                HTML, JavaScript, CSS, and Vue.
              </li>
              <li>
                Developed and supported applications written using technologies
                like PHP, HTML, JavaScript, CSS, jQuery, JSON, and REST APIs.
              </li>
              <li>
                Recommended modifications to departmental software applications
                to meet user needs.
              </li>
              <li>
                Developed training materials and technical documentation for
                existing and new applications.
              </li>
              <li>
                Oversaw the development, editing, and publishing of department
                publications including digital materials, multimedia projects,
                applicable print materials, and web pages for various audiences
                including prospective students, residents, parents, and
                university staff.
              </li>
            </ul>
          </resume-item>

          <resume-item>
            <template #title>Application Development Team Manager</template>
            <template #company>Northern Illinois University</template>
            <template #dates>Aug. 2013 &ndash; March 2019</template>
            <template #location>DeKalb, IL</template>
            <p>
              Analyzed, designed, developed, and implemented custom web-based
              and other applications for Housing and Residential Services based
              on the department's business practices and technical requirements.
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
                Oversaw the development, editing, and publishing of a
                broad-based series of department publications including print
                and digital materials, multimedia projects, and web pages for
                various audiences including prospective students, residents,
                parents, and university staff.
              </li>
              <li>
                Developed training materials and technical documentation for
                existing and new applications.
              </li>
              <li>Hired, trained, and evaluated student technical staff.</li>
            </ul>
          </resume-item>

          <resume-heading>Education</resume-heading>

          <resume-item>
            <template #title>Master of Science in Computer Science</template>
            <template #company>Northern Illinois University</template>
            <template #dates>Aug. 2013 &ndash; May 2016</template>
            <template #location>DeKalb, IL</template>
            <p>
              Coursework: Systems Design and Analysis, Database Concepts,
              Computer Networks, Android Mobile Device Programming
            </p>
            <p>GPA 3.80 / 4.00</p>
          </resume-item>

          <resume-item>
            <template #title>Bachelor of Science in Computer Science</template>
            <template #company>Northern Illinois University</template>
            <template #dates>Aug. 2011 &ndash; May 2013</template>
            <template #location>DeKalb, IL</template>
            <p>
              Coursework: Software Engineering, Data Structures and Algorithm
              Analysis in C++, Unix System, Databases, iOS Mobile Device
              Programming
            </p>
            <p>GPA 3.95 / 4.00</p>
          </resume-item>

          <resume-heading>Skills and Software</resume-heading>

          <resume-item>
            <div class="small font-italic">
              React, Vue, Node.js, Sass, Tailwindcss, Jest, Docker, Bootstrap,
              Next.js, Nuxt.js, Express.js, PHP, MySQL, Redis, WebSockets,
              Amazon Web Services, Web Speech API, Firebase, Mapbox, D3, Ionic
              Framework, Hugo, HTML5, CSS3, jQuery, WordPress
            </div>
          </resume-item>
        </div>
      </div>
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
