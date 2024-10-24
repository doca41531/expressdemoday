document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("map");

  if (container != null) {
    let options = {
      center: new kakao.maps.LatLng(37.7966983, 128.9020548), //지도의 중심좌표.
      // center: new kakao.maps.LatLng(latitude, longitude),
      level: 5, //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options);

    // 스카이뷰
    map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);

    // 드래그 막기
    map.setDraggable(false);

    map.setZoomable(false);

    var position = new kakao.maps.LatLng(37.7966983, 128.9020548);

    var marker = new kakao.maps.Marker({
      position: position,
      clickable: true,
    });

    marker.setMap(map);

    var iwContent = '<div style="padding:5px;">Click me!</div>',
      iwPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    infowindow.open(map, marker);

    var iwContent = '<img src="./img/경포도.png"></img>',
      iwRemoveable = true;

    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    kakao.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  }
});