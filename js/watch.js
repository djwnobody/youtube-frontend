const token = localStorage.getItem("token");
const str = location.search;
const id = query(str).id;
loadPage()
function loadPage(){
  http
    .get(`/videos/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      const { success, data } = res.data;
      if(!success) return console.log('失败了');
      var player = videojs(
        "my-player",
        {
          autoplay: false,
          muted: "muted",
        },
        function () {
          // How about an event listener?
          this.on("ended", function () {
            videojs.log("Awww...over so soon?!");
          });
        }
      );
      player.src({
        type: "video/mp4",
        src: data.url,
      });
      //  给播放器传数据、增加到html
      const html = template("tplVideo", {
        video: data,
      });
      $("#videoDetails").html(html);
      // 渲染comment
      loadComment(data);
      // 渲染右侧视频推荐
      loadRecommendVideos();
    });
}

function loadComment(data){
  const comments = template("tplComment", {
    video: data,
  });
  $(".comment-container").html(comments);
  $(".add-comment textarea").on("keydown", function (e) {
    if (e.key !== "Enter") return;
    http
      .post(
        `/videos/${id}/comment`,
        {
          text: this.value,
        },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((res) => {
        loadPage();
      });
  });
}

function loadRecommendVideos(){
  http  
    .get('/videos')
    .then(res=>{
      let {success,data} = res.data
      console.log(data);
      if(!success) return alert('失败了')
      data = data.filter(item=>item.id !== id)
      const videos = data.splice(0,4)
      const html = template("tplRelatedVideos",{
        videos
      });
      $(".related-videos").html(html);
    })
}
