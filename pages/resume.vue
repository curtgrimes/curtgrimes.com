<template>
  <div class="resume bg-white col-lg-9 col-xl-8 mx-auto shadow-sm my-lg-6 pt-4 px-lg-5 py-4">
    <nuxt-link
      to="/"
      class="btn btn-link position-absolute text-secondary d-print-none resume-button"
      style="left:0;top:0"
      title="Print"
      @click="print()"
    >
      <fa :icon="['far', 'arrow-left']" class="mr-2" />Home
    </nuxt-link>
    <button
      type="button"
      class="btn btn-link position-absolute text-secondary d-print-none resume-button"
      style="right:0;top:0"
      title="Print"
      @click="print()"
    >
      <fa :icon="['far', 'print']" class="mr-2" />Print
    </button>
    <div class="col-pr-12 col-md-10 col-lg-12 mx-auto">
      <div class="my-4">
        <h1 class="display-4 text-center">Curt Grimes</h1>
        <p class="lead text-center">
          Sycamore, IL &middot;
          <a href="mailto:curt@curtgrimes.com">curt@curtgrimes.com</a>
        </p>
      </div>

      <resume-heading>Experience</resume-heading>

      <resume-item>
        <template #title>Assistant Director, Web and Digital Communications</template>
        <template #company>Northern Illinois University</template>
        <template #dates>Apr. 2019 &ndash; present</template>
        <template #location>DeKalb, IL</template>
        <p>Direct all aspects of the research, planning, development, documentation, implementation and support of existing and new web sites and other departmental applications for Housing and Residential Services; direct all aspects of creating, producing, and distributing electronic and/or print communications; and lead social media activities.</p>
        <ul>
          <li>Design and maintain the departmental web presence using HTML, JavaScript, CSS, and Vue.</li>
          <li>Develop and support applications written using technologies like PHP, HTML, JavaScript, CSS, jQuery, JSON, and REST APIs.</li>
          <li>Recommend modifications or modify the departmental software applications to meet user needs.</li>
          <li>Work with software versioning and revision control system, GitLab.</li>
          <li>Develop training materials and technical documentation for existing and new applications.</li>
          <li>Oversee the development, editing, and publishing of department publications including digital materials, multi-media projects, applicable print materials, and web pages for various audiences including prospective students, residents, parents, and university staff.</li>
          <li>Identify promotional opportunities and utilize our social media presence to communicate those opportunities.</li>
          <li>Hire, supervise and evaluate student staff which includes graphic designers and social media content creator staff.</li>
        </ul>
      </resume-item>

      <resume-item>
        <template #title>Application Development Team Manager</template>
        <template #company>Northern Illinois University</template>
        <template #dates>Aug. 2013 &ndash; March 2019</template>
        <template #location>DeKalb, IL</template>
        <p>Analyzed, designed, developed, and implemented custom web-based and other applications for Housing and Residential Services based on the department's business practices and technical requirements.</p>
        <ul>
          <li>Developed application specifications and project scope, and collaborate with the user to ensure that requirements are met.</li>
          <li>Established programming techniques and procedures.</li>
          <li>Recommended modifications or modify third party software to meet user needs.</li>
          <li>Oversaw the development, editing, and publishing of a broad-based series of department publications including print and digital materials, multimedia projects, and web pages for various audiences including prospective students, residents, parents, and university staff.</li>
          <li>Developed training materials and technical documentation for existing and new applications.</li>
          <li>Hired, trained, and evaluated student technical staff.</li>
          <li>Researched IT solutions applicable to the university housing domain.</li>
        </ul>
      </resume-item>

      <resume-heading>Education</resume-heading>

      <resume-item>
        <template #title>Master of Science in Computer Science</template>
        <template #company>Northern Illinois University</template>
        <template #dates>Aug. 2013 &ndash; May 2016</template>
        <template #location>DeKalb, IL</template>
        <p>Coursework: Systems Design and Analysis, Database Concepts, Computer Networks, Android Mobile Device Programming</p>
        <p>GPA 3.80 / 4.00</p>
      </resume-item>

      <resume-item>
        <template #title>Bachelor of Science in Computer Science</template>
        <template #company>Northern Illinois University</template>
        <template #dates>Aug. 2011 &ndash; May 2013</template>
        <template #location>DeKalb, IL</template>
        <p>Coursework: Software Engineering, Data Structures and Algorithm Analysis in C++, Unix System, Databases, iOS Mobile Device Programming</p>
        <p>GPA 3.95 / 4.00</p>
      </resume-item>

      <resume-heading>Skills and Software</resume-heading>

      <resume-item>
        <ul class="list-unstyled">
          <li class="mb-2">
            <strong>Web Development:</strong> HTML, JavaScript, CSS, Vue.js, Nuxt.js, SCSS, Bootstrap, jQuery, Hugo (static site generator), Responsive web design, Web accessibility, Browser extensions and userscripts, Node.js, Express, PHP, MySQL, MS SQL, Docker, Redis, WebSockets
          </li>
          <li class="mb-2">
            <strong>Tools and Services:</strong> Git, Amazon Web Services, Firebase, Azure Bot Service, GitLab API, Dropbox API, Microsoft Graph API, Web Speech API, WordPress, MediaWiki, Stripe
          </li>
          <li class="mb-2">
            <strong>Marketing:</strong> Google Analytics, search engine optimization, social network presence building (Facebook, Twitter, YouTube)
          </li>
          <li class="mb-2">
            <strong>Microsoft Office Suite:</strong> Word, PowerPoint, Excel
          </li>
          <li class="mb-2">
            <strong>Design:</strong> Adobe Illustrator, GIMP, Paint.NET
          </li>
        </ul>
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
        }
      ]
    };
  },
  components: {
    ResumeHeading,
    ResumeItem
  },
  methods: {
    print() {
      window.print();
    }
  }
};
</script>
