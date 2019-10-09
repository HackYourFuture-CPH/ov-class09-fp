exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      return knex.raw("ALTER TABLE " + "users" + " AUTO_INCREMENT = 1");
    })
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          role_id: 1,
          organization_id: 1,
          email: "test@test.com",
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "admin",
          status: true,
          session_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN0Ijp7ImlkIjo0LCJ1c2VyX3JvbGVfaWQiOjEsImxhbmd1YWdlX2lkIjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJuaWNrbmFtZSI6InRlc3QtYWRtaW4iLCJzdGF0dXMiOjEsImNyZWF0ZWRfYXQiOiIyMDE5LTA4LTIxVDE4OjA3OjU1LjAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAxOS0wOC0yMVQxODowNzo1NS4wMDBaIiwicm9sZSI6IkFkbWluIiwidXNlclJvbGVzSWQiOjF9LCJpYXQiOjE1NjY1NDg0NTIsImV4cCI6MTU2NjU4NDQ1Mn0.O_sXvKjLDg1XOvFzRZvKOx0pjVe0aNMGvP8lQJ_lMqA",
          refreshing_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN0Ijp7ImlkIjo0LCJ1c2VyX3JvbGVfaWQiOjEsImxhbmd1YWdlX2lkIjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJuaWNrbmFtZSI6InRlc3QtYWRtaW4iLCJzdGF0dXMiOjEsImNyZWF0ZWRfYXQiOiIyMDE5LTA4LTIxVDE4OjA3OjU1LjAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAxOS0wOC0yMVQxODowNzo1NS4wMDBaIiwicm9sZSI6IkFkbWluIiwidXNlclJvbGVzSWQiOjF9LCJpYXQiOjE1NjY1NDg0NTIsImV4cCI6MTU4MjEwMDQ1Mn0.pnCBtGLmVb1pB_O2oIvkrg17btRARLrl4A-PgKhsmXI"
        },
        {
          role_id: 2,
          organization_id: 1,
          email: "admin@test.com",
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "admin",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          organization_id: 6,
          email: "operator@test.com",
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "operator",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "jgoby0@uol.com.br",
          organization_id: 20,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Jamil Goby",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "echeng1@whitehouse.gov",
          organization_id: 5,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Evered Cheng",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "eiliff2@about.com",
          organization_id: 2,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Erroll Iliff",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "gbelfelt3@imgur.com",
          organization_id: 5,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Ginni Belfelt",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "nmedforth4@soup.io",
          organization_id: 9,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Natassia Medforth",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "rcayton5@msn.com",
          organization_id: 17,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Ruthy Cayton",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "nkilleen6@hp.com",
          organization_id: 2,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Nero Killeen",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "mgierok7@linkedin.com",
          organization_id: 10,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Myrtia Gierok",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "kogavin8@simplemachines.org",
          organization_id: 9,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Karoly O'Gavin",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "cspurdens9@opera.com",
          organization_id: 2,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Caro Spurdens",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "bbowiea@cisco.com",
          organization_id: 4,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Brittni Bowie",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "cbrucknerb@un.org",
          organization_id: 4,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Cassaundra Bruckner",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "mvanc@creativecommons.org",
          organization_id: 17,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Moselle Van Giffen",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "lstackbridged@accuweather.com",
          organization_id: 1,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Lanie Stackbridge",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "rmauldene@jigsy.com",
          organization_id: 13,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Rhetta Maulden",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "ahollerinf@vkontakte.ru",
          organization_id: 9,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Aurilia Hollerin",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "kgabalag@amazon.co.uk",
          organization_id: 13,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Kristel Gabala",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "kbattersh@biglobe.ne.jp",
          organization_id: 10,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Kacie Batters",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "ckollachi@economist.com",
          organization_id: 9,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Codie Kollach",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "dtanseyj@businessweek.com",
          organization_id: 8,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Daven Tansey",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "ejzhakovk@eepurl.com",
          organization_id: 18,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Esme Jzhakov",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "ctollettl@about.com",
          organization_id: 4,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Cal Tollett",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "cgynnem@ocn.ne.jp",
          organization_id: 15,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Corinne Gynne",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "gsanphern@netvibes.com",
          organization_id: 1,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Griselda Sanpher",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "dcacacieo@msu.edu",
          organization_id: 2,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Dolf Cacacie",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "biliffp@homestead.com",
          organization_id: 6,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Bernice Iliff",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "mcleverleyq@live.com",
          organization_id: 10,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Merrili Cleverley",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "bhaydockr@e-recht24.de",
          organization_id: 1,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Bentley Haydock",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "sknightsbridges@hao123.com",
          organization_id: 1,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Sabra Knightsbridge",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "sayreet@home.pl",
          organization_id: 13,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Sandy Ayree",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "hcisaru@hexun.com",
          organization_id: 18,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Harold Cisar",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "ibackesv@amazon.co.uk",
          organization_id: 17,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Ilka Backes",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "amolloyw@alexa.com",
          organization_id: 9,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Aleksandr Molloy",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "hgrigoliisx@blog.com",
          organization_id: 13,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Heinrick Grigoliis",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "jwitherbyy@ebay.co.uk",
          organization_id: 2,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Jesselyn Witherby",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "gpardewz@spiegel.de",
          organization_id: 19,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Genia Pardew",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "delsmore10@chronoengine.com",
          organization_id: 8,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Dasha Elsmore",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "bramelot11@pen.io",
          organization_id: 6,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Bennie Ramelot",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "rjerrim12@wordpress.com",
          organization_id: 6,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Riley Jerrim",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "sgranger13@microsoft.com",
          organization_id: 2,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Solly Granger",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "gatherley14@hostgator.com",
          organization_id: 5,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Gaylord Atherley",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "eporson15@slashdot.org",
          organization_id: 12,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Eugenia Porson",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "sgascar16@theatlantic.com",
          organization_id: 18,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Sheeree Gascar",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "sporson17@unblog.fr",
          organization_id: 5,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Sharleen Porson",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "dgusney18@epa.gov",
          organization_id: 5,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "D'arcy Gusney",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "agilbertson19@bing.com",
          organization_id: 17,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Aindrea Gilbertson",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "kpenke1a@mac.com",
          organization_id: 11,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Kesley Penke",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "phlavac1b@amazon.de",
          organization_id: 17,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Pryce Hlavac",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "htosh1c@apple.com",
          organization_id: 10,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Herby Tosh",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "cjirek1d@google.co.jp",
          organization_id: 4,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Carola Jirek",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "sprowting1e@reference.com",
          organization_id: 18,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Shandie Prowting",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "cmcgriffin1f@friendfeed.com",
          organization_id: 17,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Candi McGriffin",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "hgarratty1g@imageshack.us",
          organization_id: 11,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Harmony Garratty",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "mkinzel1h@xrea.com",
          organization_id: 18,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Moyra Kinzel",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "lmettetal1i@ustream.tv",
          organization_id: 9,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Lorraine Mettetal",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "eshoute1j@amazon.co.jp",
          organization_id: 20,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Elisabetta Shoute",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "grayner1k@photobucket.com",
          organization_id: 6,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Georgetta Rayner",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "msushams1l@columbia.edu",
          organization_id: 12,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Mandie Sushams",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "dhymer1m@yellowbook.com",
          organization_id: 13,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Danie Hymer",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "sdegoey1n@parallels.com",
          organization_id: 7,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Sosanna Degoey",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "abucknall1o@shutterfly.com",
          organization_id: 16,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Anett Bucknall",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "bdrever1p@lycos.com",
          organization_id: 13,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Bernelle Drever",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "uspeke1q@ucoz.ru",
          organization_id: 11,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Udall Speke",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "rjanous1r@delicious.com",
          organization_id: 12,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Rudiger Janous",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "mpadbery1s@bluehost.com",
          organization_id: 2,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Manda Padbery",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "htemlett1t@blogspot.com",
          organization_id: 8,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Heinrick Temlett",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "bschoenfisch1u@usnews.com",
          organization_id: 3,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Bern Schoenfisch",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "wrourke1v@gnu.org",
          organization_id: 15,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "William Rourke",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "sshuttle1w@dailymotion.com",
          organization_id: 5,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Starla Shuttle",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "johenery1x@histats.com",
          organization_id: 7,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Jillie O'Henery",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "kabrahami1y@ovh.net",
          organization_id: 15,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Karin Abrahami",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "sbener1z@sun.com",
          organization_id: 6,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Siward Bener",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "rrennicks20@eepurl.com",
          organization_id: 9,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Robert Rennicks",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "sflawith21@imdb.com",
          organization_id: 3,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Sinclair Flawith",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "nelsby22@dailymail.co.uk",
          organization_id: 14,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Noe Elsby",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "gkent23@washington.edu",
          organization_id: 10,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Granny Kent",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "vthorlby24@mtv.com",
          organization_id: 20,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Vincenz Thorlby",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "dmaso25@altervista.org",
          organization_id: 19,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Debbie Maso",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "rdyball26@youku.com",
          organization_id: 3,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Rosalynd Dyball",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "pwhitehouse27@ifeng.com",
          organization_id: 19,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Pansie Whitehouse",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "qmcnally28@jalbum.net",
          organization_id: 10,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Quinton McNally",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "jbowmer29@msu.edu",
          organization_id: 18,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Jody Bowmer",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "wmuggach2a@over-blog.com",
          organization_id: 15,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Wendeline Muggach",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "lmumbeson2b@weebly.com",
          organization_id: 18,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Lucinda Mumbeson",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "rstallibrass2c@about.com",
          organization_id: 3,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Reine Stallibrass",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "lbronot2d@privacy.gov.au",
          organization_id: 2,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Linc Bronot",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "gmcgarrity2e@google.com.hk",
          organization_id: 15,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Gwenni McGarrity",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "dcolvin2f@ucsd.edu",
          organization_id: 7,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Desmund Colvin",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "lbastie2g@imgur.com",
          organization_id: 19,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Lesly Bastie",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "abraybrooks2h@sun.com",
          organization_id: 19,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Albie Braybrooks",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "bdirkin2i@sogou.com",
          organization_id: 3,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Bobbette Dirkin",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "ctailour2j@discuz.net",
          organization_id: 10,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Clair Tailour",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "kskirling2k@uol.com.br",
          organization_id: 7,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Kalle Skirling",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "cgillease2l@icq.com",
          organization_id: 18,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Constantine Gillease",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "mhaggis2m@github.com",
          organization_id: 18,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Marcela Haggis",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "cmassel2n@prlog.org",
          organization_id: 10,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Cynthy Massel",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "ljocic2o@gnu.org",
          organization_id: 4,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Liv Jocic",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "eskillen2p@google.de",
          organization_id: 5,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Evey Skillen",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "jcarlow2q@discovery.com",
          organization_id: 18,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Jamie Carlow",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "ohitter2r@go.com",
          organization_id: 6,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Oswell Hitter",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "ebarette2s@prnewswire.com",
          organization_id: 20,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Emlen Barette",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "kbardill2t@nydailynews.com",
          organization_id: 19,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Kerri Bardill",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "ldanskine2u@nps.gov",
          organization_id: 8,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Lorianne Danskine",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "hedgcombe2v@feedburner.com",
          organization_id: 15,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Hernando Edgcombe",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "lbirdwhistell2w@umn.edu",
          organization_id: 9,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Leshia Birdwhistell",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "hhollyar2x@arizona.edu",
          organization_id: 16,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Hartley Hollyar",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "kadolf2y@theatlantic.com",
          organization_id: 15,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Kettie Adolf",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "ahulburt2z@businessweek.com",
          organization_id: 12,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Anabelle Hulburt",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "gmaccomiskey30@globo.com",
          organization_id: 13,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Gasparo MacComiskey",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "dgownge31@washington.edu",
          organization_id: 1,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Donny Gownge",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "cstate32@i2i.jp",
          organization_id: 9,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Chuck State",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "uryam33@psu.edu",
          organization_id: 9,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Ulises Ryam",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "gtyt34@psu.edu",
          organization_id: 8,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Guillaume Tyt",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "vringham35@webeden.co.uk",
          organization_id: 12,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Velma Ringham",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "rmcclenaghan36@cnn.com",
          organization_id: 14,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Ralf McClenaghan",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "ceplate37@nationalgeographic.com",
          organization_id: 16,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Cathlene Eplate",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "favory38@si.edu",
          organization_id: 18,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Fionna Avory",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 2,
          email: "helsley39@nhs.uk",
          organization_id: 5,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Huberto Elsley",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "gwhitney3a@army.mil",
          organization_id: 9,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Giustino Whitney",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          role_id: 3,
          email: "cdiprose3b@furl.net",
          organization_id: 14,
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "Crista Diprose",
          status: true,
          session_token: "",
          refreshing_token: ""
        }
      ]);
    });
};
