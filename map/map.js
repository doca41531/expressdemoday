// const axios = require("axios");

document.addEventListener("DOMContentLoaded", function () {
  // const btns = document.querySelectorAll("button");
  // let place,
  //   axiosResult,
  //   latitude,
  //   longitude = null;

  // if (btns != null) {
  //   btns.forEach((item) => {
  //     item.addEventListener("click", (e) => {
  //     place = e.target.textContent;
  //     // https://dapi.kakao.com/v2/local/search/address.${FORMAT}
  //     const url =
  //       "https://dapi.kakao.com/v2/local/search/address.json?query=" +
  //       encodeURI(place);
  //     axiosResult = fetch(
  //       `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURI(
  //         place
  //       )}`,
  //       {
  //         method: "get",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "74b098c415d23c5f338f842d7a917af7",
  //         },
  // });
  //     console.log(axiosResult);
  // });
  // });
  // getLALOInfo: async (req, res) => {
  // const url =
  //   "https://dapi.kakao.com/v2/local/search/address.json?query=" +
  //   encodeURI(place);
  // axiosResult = await axios({
  // axiosResult = axios({
  //   url: url,
  //   method: "get",
  //   headers: {
  //     Authorization: "74b098c415d23c5f338f842d7a917af7",
  //   },
  // });
  // async () => {
  //   axiosResult = await fetch(
  //     `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURI(
  //       place
  //     )}`,
  //     {
  //       method: "get",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "74b098c415d23c5f338f842d7a917af7",
  //       },
  //     }
  //   );
  //   console.log(axiosResult);
  // };
  // };
  // latitude = axiosResult.data.documents[0].address.y; //위도(latitude)
  // longitude = axiosResult.data.documents[0].address.x; //경도(longitude)
  // }

  // getLALOInfo: async (req, res) => {
  //   console.log(req.body);
  // const placeAddress = req.body.placeAddress;
  // console.log(placeAddress);
  // const url =
  //   "https://dapi.kakao.com/v2/local/search/address.json?query=" +
  //   encodeURI(placeAddress);
  // const axiosResult = await axios({
  //   url: url,
  //   method: "get",
  //   headers: {
  //     Authorization: "74b098c415d23c5f338f842d7a917af7",
  //   },
  // });
  // };

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

    // var iwContent = '<div style="padding:5px;">Click me</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    //   iwPosition = new kakao.maps.LatLng(37.7966983, 128.9020548), //인포윈도우 표시 위치입니다
    //   iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // // 인포윈도우를 생성하고 지도에 표시합니다
    // var infowindow = new kakao.maps.InfoWindow({
    //   map: map, // 인포윈도우가 표시될 지도
    //   position: iwPosition,
    //   content: iwContent,
    //   removable: iwRemoveable,
    // });

    var position = new kakao.maps.LatLng(37.7966983, 128.9020548);

    var marker = new kakao.maps.Marker({
      position: position,
      clickable: true,
    });

    marker.setMap(map);

    var iwContent = '<img src="./img/경포호.png" style=" padding=5px"></img>',
      iwRemoveable = true;

    var infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    kakao.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });

    // displayMarker(locPosition, message);

    // function displayMarker(locPosition, message) {
    //   var marker = new kakao.maps.Marker({
    //     map: map,
    //     position: locPosition,
    //     clickable: true,
    //   });

    //   var iwContent = message,
    //     iwRemoveable = true;

    //   var infowindow = new kakao.maps.InfoWindow({
    //     content: iwContent,
    //     removable: iwRemoveable,
    //   });

    //   // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
    //   var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    //     iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    //   // 인포윈도우를 생성합니다
    //   var infowindow = new kakao.maps.InfoWindow({
    //     content: iwContent,
    //     removable: iwRemoveable,
    //   });

    //   // 마커에 클릭이벤트를 등록합니다
    //   kakao.maps.event.addListener(marker, "click", function () {
    //     // 마커 위에 인포윈도우를 표시합니다
    //     infowindow.open(map, marker);
    //   });

    //   infowindow.open(map, marker);

    //   map.setCenter(locPosition);
    // }
  }
});