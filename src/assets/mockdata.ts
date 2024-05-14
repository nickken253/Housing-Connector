/* 
Mockdata cần có:
- Data cho list nhà ở (chia được thành các trang thì càng tốt.)
- Data địa chính cho phần select option : Tỉnh / Huyện / Tòa Nhà ...
- Data login cho người dùng: Email, Mật khẩu
- Data người dùng: Tên, SĐT, Email, ID Căn cước
- Data investment profile: Investment Budget, Favorite Area, Properties Type Interested, Acceptable Level of Risk, Estimated Resale Time
- Data đánh giá mức tương thích cho mỗi bất động sản: 5-6 chỉ sổ theo %. (Dùng để vẽ biểu đồ radar chart)
- Data tỉ lệ vốn đã đầu tư cho mỗi bất động sản.
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
            investmentBudget: 5000000000,
            favoriteArea: 1, // 1: Hà Nội, 2: Hồ Chí Minh
            propertiesTypeInterested: 2, // 1: House, 2: Apartment, 3: Townhouse, 4: Villa, 5: Shophouse, 6: Penthouse
            acceptableLevelOfRisk: 2, // 1: High, 2: Medium, 3: Low
            estimatedResaleTime: 1, // 1: Short-term, 2: Medium-term, 3: Long-term
        },
    },
]

export const mockData = [
    {
        key: 1,
        image: 'https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
        label: "Vinhomes Ocean Park 2 - The Empire",
        address: "H. Văn Giang, T. Hưng Yên",
        numberOfBedrooms: "3",
        numberOfBathrooms: "2",
        area: "100"
    },
    {
        key: 2,
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/490206252.jpg?k=f6bdd69c9662c43e0f5b5d0763e4b2782c875dde057bef9e51424888c18f7017&o=&hp=1',
        label: "Shophouse hướng Đường trục chính Kinh Đô rộng 20m - Sao Biển",
        address: "H. Văn Giang, T. Hưng Yên",
        numberOfBedrooms: "3",
        numberOfBathrooms: "1",
        area: "80"
    },
    {
        key: 3,
        image: 'https://vnsalvation.net/wp-content/uploads/2022/04/home.jpg',
        label: "2PN S3.02 Tower - The Sapphire - Vinhomes Smart City",
        address: "32 Nguyen Trai Street, Ha Dong District , Ha Noi City",
        numberOfBedrooms: "2",
        numberOfBathrooms: "2",
        area: "70"
    },
    {
        key: 4,
        image: 'https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg',
        label: "Căn Studio A Tower - Masteri West Heights",
        address: "Q. Nam Từ Liêm, TP. Hà Nội",
        numberOfBedrooms: "2",
        numberOfBathrooms: "1",
        area: "60"
    },
    {
        key: 5,
        image: 'https://edenbraehomes.com.au/assets/Uploads/HW-Leppington-Bristol-thumb.jpg',
        label: "Nhà mặt ngõ cách Đường Xuân La - Xuân Đỉnh 300m, diện tích 76.5m² x 5 tầng,",
        address: "32 Nguyen Trai Street, Ha Dong District , Ha Noi City",
        numberOfBedrooms: "1",
        numberOfBathrooms: "1",
        area: "50"
    },
    {
        key: 6,
        image: url,
        label: "Hai Quân",
        address: "Description 6",
        numberOfBedrooms: "3",
        numberOfBathrooms: "3",
        area: "120"
    },
    {
        key: 7,
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/409657866.jpg?k=44850352b52ce866daa39d1f88023d5bc3e40447cab9a816e47da76bd909eb24&o=&hp=1',
        label: "Nhà mặt ngõ cách Mễ Trì Thượng 70m, diện tích 50m² x 7 tầng, mặt tiền 5m",
        address: "32 Nguyen Trai Street, Ha Dong District , Ha Noi City",
        numberOfBedrooms: "2",
        numberOfBathrooms: "2",
        area: "80"
    },
    {
        key: 8,
        image: 'https://vnsalvation.net/wp-content/uploads/2022/04/home.jpg',
        label: "Title 8",
        address: "Description 8",
        numberOfBedrooms: "1",
        numberOfBathrooms: "1",
        area: "50"
    },
    {
        key: 9,
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/409657866.jpg?k=44850352b52ce866daa39d1f88023d5bc3e40447cab9a816e47da76bd909eb24&o=&hp=1',
        label: "Title 9",
        address: "Description 9",
        numberOfBedrooms: "3",
        numberOfBathrooms: "1",
        area: "100"
    },
    {
        key: 10,
        image: url,
        label: "Title 10",
        address: "Description 10",
        numberOfBedrooms: "2",
        numberOfBathrooms: "2",
        area: "90"
    },
    {
        key: 10,
        image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
        label: "Palm Harbor",
        address: "2699 Green Valley, Highland Lake, FL",
        numberOfBedrooms: "3",
        numberOfBathrooms: "2",
        area: "8x16",
    },
    {
        key: 11,
        image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
        label: "Palm Harbor",
        address: "2699 Green Valley, Highland Lake, FL",
        numberOfBedrooms: "3",
        numberOfBathrooms: "2",
        area: "8x16",
    },
    {
        key: 12,
        image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
        label: "Palm Harbor",
        address: "2699 Green Valley, Highland Lake, FL",
        numberOfBedrooms: "3",
        numberOfBathrooms: "2",
        area: "8x16",
    },
    {
        key: 13,
        image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
        label: "Palm Harbor",
        address: "2699 Green Valley, Highland Lake, FL",
        numberOfBedrooms: "3",
        numberOfBathrooms: "2",
        area: "8x16",
    },
    {
        key: 14,
        image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
        label: "Palm Harbor",
        address: "2699 Green Valley, Highland Lake, FL",
        numberOfBedrooms: "3",
        numberOfBathrooms: "2",
        area: "8x16",
    },
    {
        key: 15,
        image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
        label: "Palm Harbor",
        address: "2699 Green Valley, Highland Lake, FL",
        numberOfBedrooms: "3",
        numberOfBathrooms: "2",
        area: "8x16",
    },
    {
        key: 16,
        image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
        label: "Palm Harbor",
        address: "2699 Green Valley, Highland Lake, FL",
        numberOfBedrooms: "3",
        numberOfBathrooms: "2",
        area: "8x16",
    },
    {
        key: 17,
        image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
        label: "Palm Harbor",
        address: "2699 Green Valley, Highland Lake, FL",
        numberOfBedrooms: "3",
        numberOfBathrooms: "2",
        area: "8x16",
    },
];