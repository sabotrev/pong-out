module.exports = function(grunt){
  grunt.initConfig({
      jshint: {
        all: {
          src: ['src/**/*.js'] //Globbing
        },
        works: {
          src: ['src/works.js']
        },
        broken: {
          src:['src/borked.js']
        }
      },

      concat: {
        options: {
          separator: ';'
        },
        all: {
          src: ['src/**/*.js'],
          dest: 'deploy/main.js'
        }
      },

      copy: {
        html: {
          cwd: 'src/',
          expand: true,
          src: ['**/*.html'],
          dest: 'deploy/'
        }
      },

      connect: {
        server: {
          options: {
            port: 9999,
            keepalive: true,
            base: "deploy/"
          }
        },
        watch: {
          options: {
            port: 9999,
            base: "deploy"
          }
        }
      },

      watch: {
        scripts: {
          files: ['Gruntfile.js', 'src/**/*.js'],
          tasks: ['jshint']
        },
        html: {
          files:['src/**/*.html'],
          tasks: ['copy:html']
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['jshint', 'concat', 'connect:watch', 'watch']);
};
