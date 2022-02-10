

function loadVideo(pagenum, pagesize) {
  http2
    // 需要显示第1页，一页共3个数据
    .get(`/videos?pagenum=${pagenum}&pagesize=${pagesize}`)
    .then((res) => {
      const {
        data: { count, rows },
        success,
      } = res.data;
      if (success) {
        console.log(rows);
        const html = template("tpl", {
          // videos 是html 页面用到的
          videos: rows,
        });
        $(".videos").html(html);
        $(".pager").pager({
          // 第一页的index 是0,pageIndex 决定第一次打开页面高亮的
          pageIndex: pagenum-1,
          pageSize: pagesize,
          itemCount: count,
          maxButtonCount: 7,
          onPageChanged: function (pageIndex) {
            loadVideo(pageIndex+1,pagesize)
          },
        });
      } 

      
    });
}
loadVideo(1,6)