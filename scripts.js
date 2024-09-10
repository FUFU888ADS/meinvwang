document.addEventListener('DOMContentLoaded', function () {
    const itemsPerPage = 20;
    const gridContainer = document.querySelector('.grid-container');
    const pageInfo = document.getElementById('pageInfo');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    let currentPage = 1;

    // 图片路径、标题、链接的数组
    const images = [

        { src: 'chiguawangzhan/image/川航的极品空姐周娅菲，以天使般的外貌和魔鬼般的身材吸引了无数人的目光/1.jpg', title: '川航的极品空姐周娅菲，以天使般的外貌和魔鬼般的身材吸引了无数人的目光', link: 'chiguawangzhan/xiangqingye/川航的极品空姐周娅菲，以天使般的外貌和魔鬼般的身材吸引了无数人的目光.html' },
        { src: 'chiguawangzhan/image/抖音女网红胖乐因其火辣的身材和甜美的面容赢得了大量粉丝的喜爱/5.jpg', alt: '抖音女网红胖乐因其火辣的身材和甜美的面容赢得了大量粉丝的喜爱', link: 'chiguawangzhan/xiangqingye/抖音女网红胖乐因其火辣的身材和甜美的面容赢得了大量粉丝的喜爱.html' },
        { src: 'chiguawangzhan/image/近日，江苏无锡新吴区上品花园的一位 95 后美女业主李漫漫因为偷情事件引发了广泛热议/6.jpg', alt: '近日，江苏无锡新吴区上品花园的一位 95 后美女业主李漫漫因为偷情事件引发了广泛热议', link: 'chiguawangzhan/xiangqingye/近日，江苏无锡新吴区上品花园的一位 95 后美女业主李漫漫因为偷情事件引发了广泛热议.html' },
        { src: 'chiguawangzhan/image/近日，一段河南许昌学院女大学生秦静雯的裸聊视频在网络上疯传/6.jpg', alt: '近日，一段河南许昌学院女大学生秦静雯的裸聊视频在网络上疯传', link: 'chiguawangzhan/xiangqingye/近日，一段河南许昌学院女大学生秦静雯的裸聊视频在网络上疯传.html' },
        { src: 'chiguawangzhan/image/山东菏泽的极品人妻刘霞，五官精致，皮肤白皙光滑/6.jpg', alt: '山东菏泽的极品人妻刘霞，五官精致，皮肤白皙光滑', link: 'chiguawangzhan/xiangqingye/山东菏泽的极品人妻刘霞，五官精致，皮肤白皙光滑.html' },

        { src: 'chiguawangzhan/image/山西大同的清纯眼镜妹余思琪。她身材高挑，曲线迷人，巨乳细腰和大肥臀让人无法自拔。/6.jpg', alt: '山西大同的清纯眼镜妹余思琪。她身材高挑，曲线迷人，巨乳细腰和大肥臀让人无法自拔', link: 'chiguawangzhan/xiangqingye/山西大同的清纯眼镜妹余思琪。她身材高挑，曲线迷人，巨乳细腰和大肥臀让人无法自拔.html' },
        { src: 'chiguawangzhan/image/台湾新晋人气网黄路奈（lu9petitepie）因其性感大胆的私拍视频走红/6.jpg', alt: '台湾新晋人气网黄路奈（lu9petitepie）因其性感大胆的私拍视频走红7', link: 'chiguawangzhan/xiangqingye/台湾新晋人气网黄路奈（lu9petitepie）因其性感大胆的私拍视频走红.html' },
        { src: 'chiguawangzhan/image/中国人体艺术界的代表性裸模『张筱雨』全裸艺术摄影视图流出！/3.jpg', alt: '中国人体艺术界的代表性裸模『张筱雨』全裸艺术摄影视图流出！', link: 'chiguawangzhan/xiangqingye/中国人体艺术界的代表性裸模『张筱雨』全裸艺术摄影视图流出！.html' },
        { src: 'chiguawangzhan/image/抖音巨乳网红低俗PK惩罚 输了拿牙签扎胸/3.jpg', alt: '抖音巨乳网红低俗PK惩罚 输了拿牙签扎胸', link: 'chiguawangzhan/xiangqingye/抖音巨乳网红低俗PK惩罚 输了拿牙签扎胸.html' },
        { src: 'chiguawangzhan/image/北京市海韵艺术学校英奥校区芭蕾舞妹子『胡妍慈』被包养！/3.jpg', alt: '北京市海韵艺术学校英奥校区芭蕾舞妹子『胡妍慈』被包养！', link: 'chiguawangzhan/xiangqingye/北京市海韵艺术学校英奥校区芭蕾舞妹子『胡妍慈』被包养！.html' },
        
        
        { src: 'title-image3.jpg', alt: '详情页标题图片8', link: '' },
        { src: 'title-image4.jpg', alt: '详情页标题图片9', link: 'detail-page4.html' },
        { src: 'title-image5.jpg', alt: '详情页标题图片10', link: 'detail-page5.html' },

        { src: '/chiguawangzhan/image/山西大同的清纯眼镜妹余思琪。她身材高挑，曲线迷人，巨乳细腰和大肥臀让人无法自拔。/6.jpg', alt: '山西大同的清纯眼镜妹余思琪。她身材高挑，曲线迷人，巨乳细腰和大肥臀让人无法自拔', link: 'chiguawangzhan/xiangqingye/山西大同的清纯眼镜妹余思琪。她身材高挑，曲线迷人，巨乳细腰和大肥臀让人无法自拔.html' },
        { src: '/chiguawangzhan/image/台湾新晋人气网黄路奈（lu9petitepie）因其性感大胆的私拍视频走红/6.jpg', alt: '台湾新晋人气网黄路奈（lu9petitepie）因其性感大胆的私拍视频走红7', link: 'chiguawangzhan/xiangqingye/台湾新晋人气网黄路奈（lu9petitepie）因其性感大胆的私拍视频走红.html' },
        
        { src: 'title-image4.jpg', alt: '详情页标题图片9', link: 'detail-page4.html' },
        { src: 'title-image5.jpg', alt: '详情页标题图片10', link: 'detail-page5.html' },

        { src: '/chiguawangzhan/image/山西大同的清纯眼镜妹余思琪。她身材高挑，曲线迷人，巨乳细腰和大肥臀让人无法自拔。/6.jpg', alt: '山西大同的清纯眼镜妹余思琪。她身材高挑，曲线迷人，巨乳细腰和大肥臀让人无法自拔', link: '/chiguawangzhan/xiangqingye/山西大同的清纯眼镜妹余思琪。她身材高挑，曲线迷人，巨乳细腰和大肥臀让人无法自拔.html' },
        { src: '/chiguawangzhan/image/台湾新晋人气网黄路奈（lu9petitepie）因其性感大胆的私拍视频走红/6.jpg', alt: '台湾新晋人气网黄路奈（lu9petitepie）因其性感大胆的私拍视频走红7', link: '/chiguawangzhan/xiangqingye/台湾新晋人气网黄路奈（lu9petitepie）因其性感大胆的私拍视频走红.html' },
        { src: 'title-image3.jpg', alt: '详情页标题图片8', link: 'detail-page3.html' },
        { src: 'title-image4.jpg', alt: '详情页标题图片9', link: 'detail-page4.html' },
        { src: 'title-image5.jpg', alt: '详情页标题图片10', link: 'detail-page5.html' },

        { src: '/chiguawangzhan/image/山西大同的清纯眼镜妹余思琪。她身材高挑，曲线迷人，巨乳细腰和大肥臀让人无法自拔。/6.jpg', alt: '山西大同的清纯眼镜妹余思琪。她身材高挑，曲线迷人，巨乳细腰和大肥臀让人无法自拔', link: '/chiguawangzhan/xiangqingye/山西大同的清纯眼镜妹余思琪。她身材高挑，曲线迷人，巨乳细腰和大肥臀让人无法自拔.html' },
        { src: '/chiguawangzhan/image/台湾新晋人气网黄路奈（lu9petitepie）因其性感大胆的私拍视频走红/6.jpg', alt: '台湾新晋人气网黄路奈（lu9petitepie）因其性感大胆的私拍视频走红7', link: '/chiguawangzhan/xiangqingye/台湾新晋人气网黄路奈（lu9petitepie）因其性感大胆的私拍视频走红.html' },
        { src: 'title-image3.jpg', alt: '详情页标题图片8', link: 'detail-page3.html' },
        { src: 'title-image4.jpg', alt: '详情页标题图片9', link: 'detail-page4.html' },
        { src: 'title-image5.jpg', alt: '详情页标题图片10', link: 'detail-page5.html' },    





        // 继续添加更多图片路径、标题和链接
    ];



    const totalItems = images.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);



 function formatDate(date) {
        return date.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
 }











    

    function generateContent(page) {
        gridContainer.innerHTML = ''; // 清空容器
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        for (let i = start; i < end; i++) {
            if (i >= totalItems) break;
            const item = document.createElement('a');
            item.href = images[i].link;
            item.className = 'grid-item';


 // 创建更新时间元素
            const updateTime = document.createElement('div');
            updateTime.className = 'update-time';
            updateTime.textContent = '更新时间：' + formatDate(new Date());










            

            const img = document.createElement('img');
            img.src = images[i].src;
            img.alt = images[i].alt;

            const title = document.createElement('div');
            title.className = 'title';
            title.textContent = images[i].title || images[i].alt;

            // item.appendChild(img);
            // item.appendChild(title);
            // gridContainer.appendChild(item);

             // 将更新时间和图片添加到容器中
            item.appendChild(updateTime);
            item.appendChild(img);
            item.appendChild(title);
            gridContainer.appendChild(item);
        }

        pageInfo.textContent = `第 ${page} 页，共 ${totalPages} 页`;
    }


    function updateButtons() {
        prevPageButton.disabled = currentPage === 1;
        nextPageButton.disabled = currentPage === totalPages;
    }

    prevPageButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            generateContent(currentPage);
            updateButtons();
        }
    });

    nextPageButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            generateContent(currentPage);
            updateButtons();
        }
    });

    // 设置 gridContainer 的高度和滚动条
    // gridContainer.style.maxHeight = '600px'; // 设置一个固定高度
    // gridContainer.style.overflowY = 'scroll'; // 添加垂直滚动条

    generateContent(currentPage);
    updateButtons();
});
