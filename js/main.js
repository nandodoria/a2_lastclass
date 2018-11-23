(() => {

    //init the vue stuff
    const vm = new Vue({
        el : "#app",

        data : {
            welcomemessage : "Howdy! Welcome to my Vue app.",

            videodata : [],
            singledata : [],
            
            videotitle : "",
            videodescription : "",
            videosource : "",
            
            showDetails : false
        },

        created : function() {
            //get all the movie data on page load
            this.fetchMovieData(null);
        },

        methods : {

            fetchSingle(e) {
                //debugger;
                this.fetchMovieData(e.currentTarget.dataset.movie);
            },

            loadMovie(e) {
                //debugger;
                e.preventDefault(); // block a page reload (anchor tag default behaviour)

                dataKey = e.currentTarget.getAttribute('href');
                currentData = this.videodata.filter(video => video.vid_path === dataKey);

                this.videotitle = currentData[0].vid_name;
                this.videodescription = currentData[0].vid_desc;
                this.videosource = dataKey;

                this.showDetails = true;

                setTimeout(function(){window.scrollTo(0,1200)}, 500);
            },


            fetchMovieData(movie) {
                // this is a ternary statement (shorthand for if/else, left of the : is true, right is false)
            let url = movie ?`.includes/index.php?movie=${movie}` : './includes/index.php';

                fetch(url)
                .then(res => res.json()) 
                .then(data => {
                    console.log(data);

                    if (movie) {
                        // store data in the single result above
                        this.singledata=data;
                    } else {
                        // initial data grab, store in the videodata array
                        this.videodata = data;
                    }
                })

                .catch(function(error){
                    console.log(error);
                });

            }
        }
    });


})();