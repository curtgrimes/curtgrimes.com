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
            Sycamore, IL
            <span class="d-none d-sm-inline">&middot;</span>
            <br class="d-sm-none" />
            <a href="mailto:curt@curtgrimes.com">curt@curtgrimes.com</a>
            <span class="d-none d-print-inline">
              &middot;
              <a href="https://curtgrimes.com">curtgrimes.com</a>
            </span>
          </p>

          <resume-heading>Experience</resume-heading>

          <resume-item>
            <template #title
              >Assistant Director, Web and Digital Communications</template
            >
            <template #company>Northern Illinois University</template>
            <template #dates>Apr. 2019 &ndash; present</template>
            <template #location>DeKalb, IL</template>
            <p>
              Direct all aspects of the research, planning, development,
              documentation, implementation and support of existing and new web
              sites and other departmental applications for Housing and
              Residential Services; direct all aspects of creating, producing,
              and distributing electronic and/or print communications; and lead
              social media activities.
            </p>
            <ul class="pl-3">
              <li>
                Design and maintain the departmental web presence using HTML,
                JavaScript, CSS, and Vue.
              </li>
              <li>
                Develop and support applications written using technologies like
                PHP, HTML, JavaScript, CSS, jQuery, JSON, and REST APIs.
              </li>
              <li>
                Recommend modifications or modify the departmental software
                applications to meet user needs.
              </li>
              <li>
                Work with software versioning and revision control system,
                GitLab.
              </li>
              <li>
                Develop training materials and technical documentation for
                existing and new applications.
              </li>
              <li>
                Oversee the development, editing, and publishing of department
                publications including digital materials, multi-media projects,
                applicable print materials, and web pages for various audiences
                including prospective students, residents, parents, and
                university staff.
              </li>
              <li>
                Identify promotional opportunities and utilize our social media
                presence to communicate those opportunities.
              </li>
              <li>
                Hire, supervise and evaluate student staff which includes
                graphic designers and social media content creator staff.
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
                Recommended modifications or modify third party software to meet
                user needs.
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
              <li>
                Researched IT solutions applicable to the university housing
                domain.
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
            <ul class="list-unstyled">
              <li class="mb-2">
                <strong>Frontend:</strong>
                {{ getSkillsList("Frontend") }}
              </li>
              <li class="mb-2">
                <strong>Backend:</strong>
                {{ getSkillsList("Backend") }}
              </li>
              <li class="mb-2">
                <strong>Services:</strong>
                {{ getSkillsList("Services") }}
              </li>
              <li class="mb-2">
                <strong>Marketing:</strong>
                {{ getSkillsList("Marketing") }}
              </li>
              <li class="mb-2">
                <strong>Design:</strong>
                {{ getSkillsList("Design") }}
              </li>
            </ul>
          </resume-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResumeHeading from "~/components/ResumeHeading";
import ResumeItem from "~/components/ResumeItem";
import skills from "~/data/skills";

export default {
  head() {
    return {
      title: "Résumé - Curt Grimes - Web Developer",
      bodyAttrs: {
        class: "bg-light"
      },
      meta: [
        {
          hid: "og:title",
          property: "og:title",
          content: "Résumé - Curt Grimes - Web Developer"
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
            "The résumé for Curt Grimes, a full-stack web developer located in the northern Illinois area."
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
    getSkillsList(groupName) {
      return skills
        .find(g => g.name === groupName)
        .examples.map(e => e.name)
        .join(", ");
    },
    initStickyTopObserver() {
      new IntersectionObserver(records => {
        this.headerIsSticky = records[0] && records[0].isIntersecting === false;
      }).observe(this.$refs["before-sticky-header"]);
    }
  }
};
</script>
