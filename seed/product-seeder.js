var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');
var products = [
	 new Product({
		imagePath: 'https://cdn.tgdd.vn/Products/Images/42/60831/iphone-6-3-400x460.png',
		title: 'iPhone 6s 16GB MKQM2- Rose Gold',
		description: 'Với cải tiến khá mạnh trên cảm biến bằng các lớp ngăn giữa các diot cảm nhận ánh sáng giúp giảm sự tán xạ của ánh sáng lên các điểm ảnh liền nhau.',
		price: 550
	}),
	new Product({
		imagePath: 'http://shop.arrowjs.io/img/products/35394_26_04_15_macbook_pro_retina_2015_out.jpg',
		title: 'MacBook Pro 13-inch Retina MF841ZP/A (Hàng chính Hãng)',
		description: 'Trong sự kiện Spring Forward  hồi đầu tháng 3 Apple đã giới thiệu dòng sản phẩm Macbook Pro Retina MF841 2015 với màn hình 13”. ',
		price: 650
	}),
	new Product({
		imagePath: 'http://shop.arrowjs.io/img/products/22625_21_04_16_mac12-_pink.jpg',
		title: 'Macbook 12 Retina MMGM2 (ROSE GOLD)- Model 2016',
		description: 'Đúng như tin đồn MacBook 12 mới không thay đổi về thiết kế mà Apple chỉ nâng cấp bộ vi xử lý, RAM tốc độ cao hơn, GPU mạnh mẽ hơn, pin cho thời gian sử dụng nhiều hơn... và thêm tùy chọn màu hồng, lần đầu tiên trên laptop của Apple.',
		price: 800
	}),
	new Product({
		imagePath: 'http://shop.arrowjs.io/img/products/22625_21_04_16_mac12-_pink.jpg',
		title: 'Macbook Air 13-inch MMGG2- Model 2016 (Hàng chính Hãng)',
		description: 'Đúng như tin đồn MacBook 12 mới không thay đổi về thiết kế mà Apple chỉ nâng cấp bộ vi xử lý, RAM tốc độ cao hơn, GPU mạnh mẽ hơn, pin cho thời gian sử dụng nhiều hơn... và thêm tùy chọn màu hồng, lần đầu tiên trên laptop của Apple.Với mức RAM mới, MacBook Air 13" sẽ có tính cạnh tranh cao hơn so với các đối thủ và đây cũng chính là dung lượng RAM mặc định của MacBook Pro Retina 15" vài năm trước đây (bây giờ đã là 16GB). ',
		price: 750
	}), 
	new Product({
		imagePath: 'http://shop.arrowjs.io/img/products/35394_26_04_15_macbook_pro_retina_2015_out.jpg',
		title: 'MacBook Pro 13-inch Retina MF841ZP/A (Hàng chính Hãng)',
		description: 'Trong sự kiện Spring Forward  hồi đầu tháng 3 Apple đã giới thiệu dòng sản phẩm Macbook Pro Retina MF841 2015 với màn hình 13”. ',
		price: 650
	}), 
	new Product({
		imagePath: 'http://shop.arrowjs.io/img/products/22625_21_04_16_mac12-_pink.jpg',
		title: 'Macbook 12 Retina MMGM2 (ROSE GOLD)- Model 2016',
		description: 'Đúng như tin đồn MacBook 12 mới không thay đổi về thiết kế mà Apple chỉ nâng cấp bộ vi xử lý, RAM tốc độ cao hơn, GPU mạnh mẽ hơn, pin cho thời gian sử dụng nhiều hơn... và thêm tùy chọn màu hồng, lần đầu tiên trên laptop của Apple.',
		price: 800
	})
];

var done = 0;

for (var i = 0; i < products.length;i++){
	products[i].save(function(err, result){
		done++;
		if(done == products.length){
			exit();
		}
	});
}
function exit(){
	mongoose.disconnect();
}
