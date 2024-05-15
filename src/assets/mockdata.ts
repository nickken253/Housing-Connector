/* 
Mockdata cần có:
- Đ Data cho list nhà ở (chia được thành các trang thì càng tốt.)
- Đ Data địa chính cho phần select option : Tỉnh / Huyện / Tòa Nhà ...
- Đ Data login cho người dùng: Email, Mật khẩu
- Đ Data người dùng: Tên, SĐT, Email, ID Căn cước
- Đ Data investment profile: Investment Budget, Favorite Area, Properties Type Interested, Acceptable Level of Risk, Estimated Resale Time
- Data đánh giá mức tương thích cho mỗi bất động sản: 5-6 chỉ sổ theo %. (Dùng để vẽ biểu đồ radar chart)
- Đ Data tỉ lệ vốn đã đầu tư cho mỗi bất động sản.
*/


export const mockUserData = [
    {
        key: 1,
        name: "Nguyễn Quốc An",
        phone: "0976765654",
        email: "AnNQ@gmail.com",
        password: "123",
        citizenID: "123456789",
        investmentProfile: {
            investmentBudget: 1, // 1: < 2 tỷ, 2: 2-5 tỷ, 3: 5-10 tỷ, 4: > 10 tỷ
            favoriteArea: 1, // 1: Hà Đông, 2: Cầu Giấy, 3: Long Biên, 4: Hoàn Kiếm, 5: Hai Bà Trưng, 6: Ba Đình, 7: Hoàng Mai, 8: Đống Đa, 9: Thanh Xuân, 10: Tây Hồ
            propertiesTypeInterested: 2, // 1: Apartment, 2: Villa, 3: Real Estate
            acceptableLevelOfRisk: 2, // 1: High, 2: Medium, 3: Low
            estimatedResaleTime: 1, // 1: Short-term, 2: Medium-term, 3: Long-term
        },
    },
]

export const mockTypeData = [
    { key: 0, label: "All", value: 0},
    { key: 1, label: "Apartment", value: 1},
    { key: 2, label: "Villa", value: 2 },
    { key: 3, label: "Real Estate", value: 3 },
]
export const mockLevelOfRiskData = [
    { key: 0, label: "All", value: 0},
    { key: 1, label: "High", value: 1 },
    { key: 2, label: "Medium", value: 2},
    { key: 3, label: "Low", value: 3},
]

export const mockResaleTimeData = [
    { key: 0, label: "All", value: 0},
    { key: 1, label: "Short-term", value: 1 },
    { key: 2, label: "Medium-term", value: 2 },
    { key: 3, label: "Long-term", value: 3 },
]

export const mockBudgetData = [
    { key: 0, label: "All", value: 0},
    { key: 1, label: "< 2 tỷ" },
    { key: 2, label: "2-5 tỷ" },
    { key: 3, label: "5-10 tỷ" },
    { key: 4, label: "> 10 tỷ" },
]
// nhà có thể có 3,4,5,6 tầng, diện tích mặt tiền từ 5-10m2, hướng nhà có thể Đông, Tây, Nam, Bắc, Đông Nam, Tây Bắc, Đông Bắc, Tây Nam
export const mockData = [
    {
        key: 1,
        image: 'https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
        label: "Nhà mặt đường Nguyễn Hữu Thọ",
        address: "14 Nguyễn Hữu Thọ, phường Hà Cầu, quận Hà Đông, Hà Nội",
        description: "Nhà mặt đường Nguyễn Hữu Thọ, diện tích 100m² x 3 tầng, mặt tiền 5m, hướng Bắc, sổ đỏ rõ ràng, pháp lý minh bạch, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "3",
        numberOfBathrooms: "2",
        area: 100,
        district: 1,// 1: Hà Đông, 2: Cầu Giấy, 3: Long Biên, 4: Hoàn Kiếm, 5: Hai Bà Trưng, 6: Ba Đình, 7: Hoàng Mai, 8: Đống Đa, 9: Thanh Xuân, 10: Tây Hồ
        type: 2, // 1: Apartment, 2: Villa, 3: Real Estate
        price: 2400000000,// 2.4 tỷ
    },
    {
        key: 2,
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/490206252.jpg?k=f6bdd69c9662c43e0f5b5d0763e4b2782c875dde057bef9e51424888c18f7017&o=&hp=1',
        label: "Shophouse hướng Đường trục chính Nguyễn Trãi rộng 20m - Sao Biển",
        address: "99 Nguyen Trai Street, Ha Dong District , Ha Noi City",
        description: "Shophouse hướng Đường trục chính Nguyễn Trãi rộng 20m, diện tích 80m² x 3 tầng, mặt tiền 5m, hướng Đông, sổ đỏ rõ ràng, pháp lý minh bạch, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "3",
        numberOfBathrooms: "1",
        area: 80, 
        district: 1,
        type: 3,
        price: 2000000000,// 2 tỷ
    },
    {
        key: 3,
        image: 'https://vnsalvation.net/wp-content/uploads/2022/04/home.jpg',
        label: "2PN T11 - Vinhome Time City",
        address: "T11, Vinhome Time City, Minh Khai, Hai Bà Trưng, Hà Nội",
        description: "Phòng 2 ngủ, tầng 11, tòa Vinhome Time City, diện tích 70m², view đẹp, nội thất đầy đủ, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "2",
        numberOfBathrooms: "2",
        area: 70,
        district: 5,
        type: 1,
        price: 3500000000,// 3.5 tỷ
    },
    {
        key: 4,
        image: 'https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
        label: "Căn Studio A Tower - Masteri West Heights",
        address: "35 Thụy Khuê , Masteri West Heights, Tây Hồ, Hà Nội",
        description: "Căn Studio A Tower, Masteri West Heights, diện tích 60m², view đẹp, nội thất đầy đủ, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "2",
        numberOfBathrooms: "1",
        area: 60,
        district: 10,
        type: 1,
        price: 1500000000,// 1.5 tỷ
    },
    {
        key: 5,
        image: 'https://edenbraehomes.com.au/assets/Uploads/HW-Leppington-Bristol-thumb.jpg',
        label: "Nhà mặt ngõ cách Đường Xuân La - Xuân Đỉnh 300m, diện tích 76.5m² x 5 tầng,",
        address: "32 Nguyen Trai Street, Ha Dong District , Ha Noi City",
        description: "Nhà mặt ngõ cách Đường Xuân La - Xuân Đỉnh 300m, diện tích 76.5m² x 5 tầng, mặt tiền 5m, hướng Đông Nam, sổ đỏ rõ ràng, pháp lý minh bạch, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "1",
        numberOfBathrooms: "1",
        area: 50,
        district: 1,
        type: 3,
        price: 8000000000,// 8 tỷ
    },
    {
        key: 6,
        image: "https://onehousing.vn/image-resize/width=650,quality=80,format=auto/https://cdn.onehousing.vn/media/RESIDENTIAL/7104383c-a5ef-417a-b937-4d37503c462d/2c9425308bd28584018beaa2b7d31c4a/LIVING_ROOM/FB_IMG_1700293539085_1700449244886.jpg",
        label: "Nhà mặt đất 3 tầng, đường Chương Dương, Hoàn Kiếm, Hà Nội",
        address: "13 Chương Dương, Hoàn Kiếm, Hà Nội",
        description: "Nhà mặt đất 3 tầng, diện tích 120m², mặt tiền 6m, hướng Đông Bắc, sổ đỏ rõ ràng, pháp lý minh bạch, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "3",
        numberOfBathrooms: "3",
        area: 120,
        district: 4,
        type: 2,
        price: 5400000000,// 5.4 tỷ
    },
    {
        key: 7,
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/409657866.jpg?k=44850352b52ce866daa39d1f88023d5bc3e40447cab9a816e47da76bd909eb24&o=&hp=1',
        label: "Nhà mặt ngõ cách Mễ Trì Thượng 70m, diện tích 50m² x 7 tầng, mặt tiền 5m",
        address: "32 Nguyen Trai Street, Ha Dong District , Ha Noi City",
        description: "Nhà mặt ngõ cách Mễ Trì Thượng 70m, diện tích 50m² x 7 tầng, mặt tiền 5m, hướng Đông Nam, sổ đỏ rõ ràng, pháp lý minh bạch, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "2",
        numberOfBathrooms: "2",
        area: 80,
        district: 1,
        type: 3,
        price: 12000000000,// 12 tỷ
    },
    {
        key: 8,
        image: 'https://th.bing.com/th/id/OIP.RaynsnvWV2h9iBDQlXfkiQAAAA?rs=1&pid=ImgDetMain',
        label: "Căn 2 phòng ngủ T02 - Vinhome Time City",
        address: "T02, Vinhome Time City, Minh Khai, Hai Bà Trưng, Hà Nội",
        description: "Căn 2 phòng ngủ T02, Vinhome Time City, diện tích 70m², view đẹp, nội thất đầy đủ, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "2",
        numberOfBathrooms: "1",
        area: 70,
        district: 5,
        type: 1,
        price: 2300000000,// 2.3 tỷ
    },
    {
        key: 9,
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/409657866.jpg?k=44850352b52ce866daa39d1f88023d5bc3e40447cab9a816e47da76bd909eb24&o=&hp=1',
        label: "Biệt thự 3 tầng, đường Lê Trọng Tấn, Thanh Xuân, Hà Nội",
        address: "13 Lê Trọng Tấn, Thanh Xuân, Hà Nội",
        description: "Biệt thự 3 tầng, diện tích 100m², mặt tiền 5m, hướng Đông Bắc, sổ đỏ rõ ràng, pháp lý minh bạch, giá tốt.\nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "3",
        numberOfBathrooms: "3",
        area: 100,
        district: 9,
        type: 2,
        price: 7900000000,// 7.9 tỷ
    },
    {
        key: 10,
        image: 'https://plutproperties.com/wp-content/uploads/2020/03/BC-1.jpg',
        label: "Căn hộ 2 ngủ - C2A Rice City Linh Đàm",
        address: "C2A Rice City Linh Đàm, Hoàng Liệt, Hoàng Mai, Hà Nội",
        description: "Căn hộ 2 ngủ, C2A Rice City Linh Đàm, diện tích 90m², view đẹp, nội thất đầy đủ, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "2",
        numberOfBathrooms: "2",
        area: 90,
        district: 7,
        type: 1,
        price: 1800000000,// 1.8 tỷ
    },
    {
        key: 11,
        image: 'https://images.cenhomes.vn/2019/04/mau-thiet-ke-noi-that-chung-cu-d%E1%BA%B9p.jpg',
        label: "Căn hộ 3 phòng ngủ - Hồ Gươm Plaza",
        address: "Hồ Gươm Plaza, Hà Đông, Hà Nội",
        description: "Căn hộ 3 phòng ngủ, Hồ Gươm Plaza, diện tích 100m², view đẹp, nội thất đầy đủ, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "3",
        numberOfBathrooms: "2",
        area: 100,
        district: 1,
        type: 1,
        price: 2500000000,// 2.5 tỷ
    },
    {
        key: 12,
        image: 'https://amore-architecture.vn/wp-content/uploads/2021/01/thiet-ke-chung-cu-mini-20m2-1.6-min.jpg',
        label: "Căn Studio - Chung cư mini Đường Ngô Thì Nhậm, Hà Đông, Hà Nội",
        address: "12 ngõ 35 Ngô Thì Nhậm, Hà Đông, Hà Nội",
        description: "Căn Studio, chung cư mini, diện tích 25m², view đẹp, nội thất đầy đủ, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "1",
        numberOfBathrooms: "1",
        area: 25,
        district: 1,
        type: 1,
        price: 800000000,// 800 triệu
    },
    {
        key: 13,
        image: 'https://onehousing.vn/image-resize/width=1240,quality=80,format=auto/https://cdn.onehousing.vn/media/RESIDENTIAL/7104383c-a5ef-417a-b937-4d37503c462d/2c9425308bd28584018beaa2b7d31c4a/LIVING_ROOM/FB_IMG_1700293539085_1700449244886.jpg',
        label: 'Nhà mặt ngõ cách Trần Bình 200m, diện tích 41.62m² x 4 tầng, mặt tiền 3.64m',
        address: "Trần Bình, Cầu Giấy, Hà Nội",
        description: "Nhà mặt ngõ cách Trần Bình 200m, diện tích 41.62m² x 4 tầng, mặt tiền 3.64m, hướng Đông Nam, sổ đỏ rõ ràng, pháp lý minh bạch, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "4",
        numberOfBathrooms: "3",
        area: 41.62,
        district: 2,
        type: 3,
        price: 7500000000,// 7.5 tỷ
    },
    {
        key: 14,
        image: 'https://th.bing.com/th/id/OIP.KqSX4YrwH-qOm4rT9oRBWQHaJ4?w=1536&h=2048&rs=1&pid=ImgDetMain',
        label: 'Nhà mặt ngõ Tân Mai, 4 tầng, diện tích 40m², mặt tiền 4m',
        address: "Tân Mai, Hoàng Mai, Hà Nội",
        description: "Nhà mặt ngõ Tân Mai, 4 tầng, diện tích 40m², mặt tiền 4m, hướng Đông Nam, sổ đỏ rõ ràng, pháp lý minh bạch, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "4",
        numberOfBathrooms: "3",
        area: 40,
        district: 7,
        type: 3,
        price: 7200000000,// 7.2 tỷ        
    },
    {
        key: 15,
        image: 'https://vinhome-greenbay.com/wp-content/uploads/2016/10/bi%E1%BB%87t-th%E1%BB%B1-vinhomes-green-bay.jpg',
        label: 'Biệt thự liền kề 4 tầng 150m², khu Chu Văn An, Hà Đông, Hà Nội',
        address: "Chu Văn An, Hà Đông, Hà Nội",
        description: "Biệt thự liền kề 4 tầng, diện tích 150m², mặt tiền 5m, hướng Đông Bắc, sổ đỏ rõ ràng, pháp lý minh bạch, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "4",
        numberOfBathrooms: "4",
        area: 150,
        district: 1,
        type: 2,
        price: 18000000000,// 18 tỷ
    },
    {
        key: 16,
        image: 'https://houseinhanoi.vn/wp-content/uploads/2019/10/031192b1a5e043be1af1.jpg',
        label: 'Nhà mặt ngõ diện tích 120m², 5 tầng, mặt tiền 6m, khu An Dương, Tây Hồ, Hà Nội',
        address: "An Dương, Tây Hồ, Hà Nội",
        description: "Nhà mặt ngõ diện tích 120m², 5 tầng, mặt tiền 6m, hướng Đông Bắc, sổ đỏ rõ ràng, pháp lý minh bạch, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "4",
        numberOfBathrooms: "5",
        area: 120,
        district: 10,
        type: 3,
        price: 12000000000,// 12 tỷ
    },
    {
        key: 17,
        image: 'https://trungtamnhanhoa.vn/wp-content/uploads/2022/11/Trung-tam-day-tre-cham-noi-tre-tu-ky-Hoc-Mon.jpg',
        label: 'Nhà mặt ngõ khu Đầm Trấu, 3 tầng, diện tích 62.4m², mặt tiền 8m, Hoàn Kiếm, Hà Nội',
        address: "Đầm Trấu, Hoàn Kiếm, Hà Nội",
        description: "Nhà mặt ngõ khu Đầm Trấu, 3 tầng, diện tích 62.4m², mặt tiền 8m, hướng Đông Bắc, sổ đỏ rõ ràng, pháp lý minh bạch, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "4",
        numberOfBathrooms: "3",
        area: 62.4,
        district: 4,
        type: 3,
        price: 9000000000,// 9 tỷ
    },
    {
        key: 18,
        image: 'https://th.bing.com/th/id/OIP.xydgEujzIwhxUKe7G6ICwgHaFj?pid=ImgDet&w=474&h=355&rs=1',
        label: 'Căn Studio - Chung cư mini Đường Xã Đàn, Đống Đa, Hà Nội',
        address: "Xã Đàn, Đống Đa, Hà Nội",
        description: "Căn Studio, chung cư mini, diện tích 20m², view đẹp, nội thất đầy đủ, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "1",
        numberOfBathrooms: "1",
        area: 20,
        district: 8,
        type: 1,
        price: 500000000,// 500 triệu
    
    },
    {
        key: 19,
        image: 'https://www.tigergroup.ae/Sources/ProjectPage/assets/img/lilium/web/unit-big-twobedroom.webp',
        label: 'Căn 2 phòng ngủ - Sunshine City',
        address: "Sunshine City, Hà Đông, Hà Nội",
        description: "Căn 2 phòng ngủ, Sunshine City, diện tích 70m², view đẹp, nội thất đầy đủ, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "2",
        numberOfBathrooms: "1",
        area: 70,
        district: 1,
        type: 1,
        price: 2000000000,// 2 tỷ
    },
    {
        key: 20,
        image: 'https://ds4.cityrealty.com/img/c2f791ccd50b9be31cb8bf5752767edd4a551332+1004++0+60/37-14-34th-street-02.jpg',
        label: 'Căn hộ 2 phòng ngủ view hướng quảng trường - Vinhomes Royal City',
        address: "R05 Vinhomes Royal City, Nguyễn Trãi, Thanh Xuân, Hà Nội",
        description: "Căn hộ 2 phòng ngủ view hướng quảng trường, R05 Vinhomes Royal City, diện tích 80m², view đẹp, nội thất đầy đủ, giá tốt. \nVị trí nhà nằm tại tuyến đường chính với cơ sở hạ tầng giao thông thuận tiện, gồm nhiều trường học, bệnh viện và tiện ích xung quanh.",
        numberOfBedrooms: "2",
        numberOfBathrooms: "2",
        area: 80,
        district: 9,
        type: 1,
        price: 5500000000,// 5.5 tỷ
    }
];

export const mockDistrictData = [
    { key: 0, label: "All", value: 0},
    { key: 1, label: "Ha Dong", value: 1 },
    { key: 2, label: "Cau Giay", value: 2 },
    { key: 3, label: "Long Bien", value: 3 },
    { key: 4, label: "Hoan Kiem", value: 4 },
    { key: 5, label: "Hai Ba Trung", value: 5 },
    { key: 6, label: "Ba Dinh", value: 6 },
    { key: 7, label: "Hoang Mai", value: 7 },
    { key: 8, label: "Dong Da", value: 8 },
    { key: 9, label: "Thanh Xuan", value: 9 },
    { key: 10, label: "Tay Ho", value: 10 },
];


export const mockInvestedData = [
    {
        key: 1,
        realEsateID:  1,
        investedPrice: 230000000, // 230 triệu
    },
    {
        key: 2,
        realEsateID:  2,
        investedPrice: 100000000, // 100 triệu
    },
    {
        key: 3,
        realEsateID:  3,
        investedPrice: 150000000, // 150 triệu
    },
    {
        key: 4,
        realEsateID:  4,
        investedPrice: 200000000, // 200 triệu
    },
    {
        key: 5,
        realEsateID:  5,
        investedPrice: 300000000, // 300 triệu
    },
    {
        key: 6,
        realEsateID:  6,
        investedPrice: 570000000, // 570 triệu
    },
    {
        key: 7,
        realEsateID:  7,
        investedPrice: 780000000, // 780 triệu
    },
    {
        key: 8,
        realEsateID:  8,
        investedPrice: 820000000, // 820 triệu
    },
    {
        key: 9,
        realEsateID:  9,
        investedPrice: 900000000, // 900 triệu
    },
    {
        key: 10,
        realEsateID:  10,
        investedPrice: 1000000000, // 1 tỷ
    },
    {
        key: 11,
        realEsateID:  11,
        investedPrice: 1200000000, // 1.2 tỷ
    },
    {
        key: 12,
        realEsateID:  12,
        investedPrice: 250000000, // 240 triệu
    },
    {
        key: 13,
        realEsateID:  13,
        investedPrice: 340000000, // 340 triệu
    },
    {
        key: 14,
        realEsateID:  14,
        investedPrice: 650000000, // 650 triệu
    },
    {
        key: 15,
        realEsateID:  15,
        investedPrice: 7530000000, // 7.53 tỷ
    },
    {
        key: 16,
        realEsateID:  16,
        investedPrice: 1653000000, // 1.653 tỷ
    },
    {
        key: 17,
        realEsateID:  17,
        investedPrice: 1700000000, // 1.7 tỷ
    },
    {
        key: 18,
        realEsateID:  18,
        investedPrice: 455000000, // 455 triệu
    },
    {
        key: 19,
        realEsateID:  19,
        investedPrice: 932000000, // 932 triệu
    },
    {
        key: 20,
        realEsateID:  20,
        investedPrice: 1300000000, // 1.3 tỷ
    }

];

export const mockTowerData = [
    { key: 0, districtID: 0, label: "All", value: 0},
    { key: 1, districtID: 1, label: "MAC plaza", value: 1},
    { key: 2, districtID: 1, label: "Sao Biển", value: 2},
    { key: 3, districtID: 2, label: "Vinhome Time City", value: 3},
    { key: 4, districtID: 2, label: "Masteri West Heights", value: 4},
    { key: 5, districtID: 7, label: "Rice City Linh Đàm", value: 5},
    { key: 6, districtID: 1, label: "Hồ Gươm Plaza", value: 6},
    { key: 7, districtID: 3, label: "Vinhomes Ocean Park", value: 7},
    { key: 8, districtID: 4, label: "Sunshine City", value: 8},
    { key: 9, districtID: 5, label: "Vinhomes Smart City", value: 9},
    { key: 10, districtID: 9, label: "Vinhomes Royal City", value: 10},
];

// data for radar chart
export const mockRadarData = [
    {
        key: 1, 
        // all data <= 1 : .1 to 1
        investmentBudget: .5, 
        distance: .3, // 
        propertiesTypeInterested: .3, // .3 or .7 or 1
        acceptableLevelRisk: .4, // < 1
        estimatedResaleTime: .7
    },
    {
        key: 2,
        investmentBudget: .7,
        distance: .6,
        propertiesTypeInterested: .7,
        acceptableLevelRisk: .5,
        estimatedResaleTime: .6
    },
    {
        key: 3,
        investmentBudget: 0.4,
        distance: 0.8,
        propertiesTypeInterested: 0.7,
        acceptableLevelRisk: 0.3,
        estimatedResaleTime: 0.9
    },
    {
        key: 4,
        investmentBudget: 0.9,
        distance: 0.2,
        propertiesTypeInterested: 0.3,
        acceptableLevelRisk: 0.6,
        estimatedResaleTime: 0.5
    },
    {
        key: 5,
        investmentBudget: 0.7,
        distance: 0.1,
        propertiesTypeInterested: 1,
        acceptableLevelRisk: 0.4,
        estimatedResaleTime: 0.3
    },
    {
        key: 6,
        investmentBudget: 0.5,
        distance: 0.3,
        propertiesTypeInterested: 0.3,
        acceptableLevelRisk: 0.8,
        estimatedResaleTime: 0.7
    },
    {
        key: 7,
        investmentBudget: 0.2,
        distance: 0.7,
        propertiesTypeInterested: 0.7,
        acceptableLevelRisk: 0.5,
        estimatedResaleTime: 0.4
    },
    {
        key: 8,
        investmentBudget: 0.6,
        distance: 0.4,
        propertiesTypeInterested: 1,
        acceptableLevelRisk: 0.2,
        estimatedResaleTime: 0.8
    },
    {
        key: 9,
        investmentBudget: 0.3,
        distance: 0.5,
        propertiesTypeInterested: 0.3,
        acceptableLevelRisk: 0.7,
        estimatedResaleTime: 0.6
    },
    {
        key: 10,
        investmentBudget: 0.8,
        distance: 0.9,
        propertiesTypeInterested: 0.7,
        acceptableLevelRisk: 0.1,
        estimatedResaleTime: 0.2
    },
    {
        key: 11,
        investmentBudget: 0.1,
        distance: 0.6,
        propertiesTypeInterested: 1,
        acceptableLevelRisk: 0.3,
        estimatedResaleTime: 0.5
    },
    {
        key: 12,
        investmentBudget: 0.5,
        distance: 0.2,
        propertiesTypeInterested: 0.3,
        acceptableLevelRisk: 0.4,
        estimatedResaleTime: 0.9
    },
    {
        key: 13,
        investmentBudget: 0.9,
        distance: 0.4,
        propertiesTypeInterested: 0.7,
        acceptableLevelRisk: 0.2,
        estimatedResaleTime: 0.3
    },
    {
        key: 14,
        investmentBudget: 0.7,
        distance: 0.8,
        propertiesTypeInterested: 1,
        acceptableLevelRisk: 0.6,
        estimatedResaleTime: 0.4
    },
    {
        key: 15,
        investmentBudget: 0.3,
        distance: 0.1,
        propertiesTypeInterested: 0.3,
        acceptableLevelRisk: 0.9,
        estimatedResaleTime: 0.5
    },
    {
        key: 16,
        investmentBudget: 0.6,
        distance: 0.3,
        propertiesTypeInterested: 0.7,
        acceptableLevelRisk: 0.7,
        estimatedResaleTime: 0.2
    },
    {
        key: 17,
        investmentBudget: 0.8,
        distance: 0.5,
        propertiesTypeInterested: 1,
        acceptableLevelRisk: 0.4,
        estimatedResaleTime: 0.6
    },
    {
        key: 18,
        investmentBudget: 0.2,
        distance: 0.7,
        propertiesTypeInterested: 0.3,
        acceptableLevelRisk: 0.8,
        estimatedResaleTime: 0.1
    },
    {
        key: 19,
        investmentBudget: 0.4,
        distance: 0.6,
        propertiesTypeInterested: 0.7,
        acceptableLevelRisk: 0.1,
        estimatedResaleTime: 0.7
    },
    {
        key: 20,
        investmentBudget: 0.9,
        distance: 0.2,
        propertiesTypeInterested: 1,
        acceptableLevelRisk: 0.5,
        estimatedResaleTime: 0.3
    }
]