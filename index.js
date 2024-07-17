$(document).ready(function() {

    var selectedCode = '<a href="%projectLink%.html">' +
      '<div class = "projecttile">' +
        '<img class="homeImg" src="images/%projectImage%.png">' +
        '<div class="projectText">' +
          '<div class="hometiletext">' +
          '<h2 class="hometitle">%projectTitle%</h2>' +
          '<p class="homepreheader">%projectSubtitle%</p>' +
          // '<div class = "projectDesc">%projectDesc1%</div>' +
          // '<div class = "projectDesc">%projectDesc2%</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '</a>';

      var projectLink = "%projectLink%";
      var projectImage = "%projectImage%";
      var projectSubtitle = "%projectSubtitle%";
      var projectTitle = "%projectTitle%";
      var projectDesc1 = "%projectDesc1%";
      var projectDesc2 = "%projectDesc2%";

      var selectedProjects = {
          "projects" : [{
              "link" : "intranet_navigation_structure",
              "image" : "home_intranet",
              "subtitle" : "NATIONWIDE INSURANCE",
              "title" : "Intranet Navigation Structure",
              "desc1" : "Information Architect",
              "desc2" : "UX Lead"
          }, {
              "link" : "census_review_redesign",
              "image" : "home_FastCensus",
              "subtitle" : "NATIONWIDE INSURANCE",
              "title" : "Census Review Redesign",
              "desc1" : "Interaction Designer",
              "desc2" : "UX Lead"
          }, {
              "link" : "clinical_trial_matching_tool",
              "image" : "home_exaid",
              "subtitle" : "EXAID",
              "title" : "Clinical Trial Matching Tool",
              "desc1" : "Design Consultant",
              "desc2" : "Front-End Developer"
          }, {
              "link" : "contextual_switchgear_support",
              "image" : "home_lumiere",
              "subtitle" : "POWER MANAGEMENT COMPANY",
              "title" : "Contextual Support for Switchgear",
              "desc1" : "Design Consultant",
              "desc2" : "Project Manager"
          },
          // {
          //     "link" : "tween_social_coordination",
          //     "image" : "home_carma",
          //     "subtitle" : "DESIGN STUDIO COURSE",
          //     "title" : "Tween Social Coordination",
          //     "desc1" : "Interaction Designer",
          //     "desc2" : "Motion Designer"
          // },
          {
              "link" : "mobile_aviation_management",
              "image" : "home_aviation",
              "subtitle" : "ARGUS INTERNATIONAL, INC.",
              "title" : "Mobile Aviation Management",
              "desc1" : "UI Designer",
              "desc2" : "UX Designer"
          },
          // {
          //     "link" : "t1diabetes",
          //     "image" : "home_T1D",
          //     "subtitle" : "DESIGN STUDIO COURSE",
          //     "title" : "Type 1 Diabetes Education",
          //     "desc1" : "Co-Designer",
          //     "desc2" : "Workshop Facilitator"
          // },
          {
              "link" : "virtual_health_coach",
              "image" : "home_VHC",
              "subtitle" : "THE OSU COLLEGE OF MEDICINE",
              "title" : "Virtual Health Coach",
              "desc1" : "Conversational UI Designer",
              "desc2" : "Developer"
          }
        ]
      };

    selectedProjects.display = function() {
    selectedProjects.projects.forEach(function(items) {
        var newProject = selectedCode.replace(projectLink, items.link).replace(projectImage, items.image).replace(projectSubtitle, items.subtitle).replace(projectTitle, items.title).replace(projectDesc1, items.desc1).replace(projectDesc2, items.desc2);
        $(".selectedProjectGroup").append(newProject);
    })
    };

    selectedProjects.display();

})
