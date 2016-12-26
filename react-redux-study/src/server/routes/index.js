import Express from 'express';
const router = Express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.headers);
  // mg.saveUser({"openid":"12312312312"})
  res.render('index', { title: 'Express' });
});

router.get("/citylist",function(req,res,next){
  const cityList = {
     "city_list" : [
      {
        "city_id" : "762",
        "city_name" : "test",
        "city_no" : 762,
        "province_no" : "44"
      },
      {
        "city_id" : "761",
        "city_name" : "福州",
        "city_no" : 761,
        "province_no" : "35"
      },
      {
        "city_id" : "0760",
        "city_name" : "中山",
        "city_no" : 760,
        "province_no" : "44"
      },
      {
        "city_id" : "010",
        "city_name" : "北京",
        "city_no" : 10,
        "province_no" : "11"
      },
      {
        "city_id" : "020",
        "city_name" : "广州",
        "city_no" : 20,
        "province_no" : "44"
      },
      {
        "city_id" : "0510",
        "city_name" : "无锡",
        "city_no" : 510,
        "province_no" : "32"
      },
      {
        "city_id" : "0755",
        "city_name" : "深圳",
        "city_no" : 755,
        "province_no" : "44"
      },
      {
        "city_id" : "0757",
        "city_name" : "佛山",
        "city_no" : 757,
        "province_no" : "44"
      }
    ],
    "city_list_num" : 8,
    "current_page" : 1,
    "message" : "查询城市列表成功",
    "status" : 0,
    "total_num" : 8,
    "total_page" : 1
  }
  return res.send(cityList);
})


const Index = router;
export default Index;
