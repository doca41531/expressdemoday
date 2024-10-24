getLALOInfo: async (req, res) => {
  const placeAddress = req.body.placeAddress;
  const url =
    "https://dapi.kakao.com/v2/local/search/address.json?query=" +
    encodeURI(placeAddress);
  const axiosResult = await axios({
    url: url,
    method: "get",
    headers: {
      Authorization: "74b098c415d23c5f338f842d7a917af7",
    },
  });
};

const container = document.getElementById("map");
let options = {
  center: new kakao.maps.LatLng(37.7966983, 128.9020548), //지도의 중심좌표.
  level: 4, //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options);

// 스카이뷰
map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);

// 드래그 막기
map.setDraggable(false);

var lat = 37.7966983, // 위도
  lon = 128.9020548; // 경도

var locPosition = new kakao.maps.LatLng(lat, lon),
  message = "<p>경포호</p>"; // 인포윈도우에 표시될 내용입니다

displayMarker(locPosition, message);

function displayMarker(locPosition, message) {
  var marker = new kakao.maps.Marker({
    map: map,
    position: locPosition,
  });

  var iwContent = message,
    iwRemoveable = true;

  var infowindow = new kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });

  infowindow.open(map, marker);

  map.setCenter(locPosition);
}