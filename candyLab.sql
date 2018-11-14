SET NAMES UTF8;
DROP DATABASE IF EXISTS candyLab;
CREATE DATABASE candyLab CHARSET=UTF8;
USE candyLab;

CREATE TABLE user_info(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32) UNIQUE,
    upwd VARCHAR(32) NOT NULL,
    birth VARCHAR(32),
    email VARCHAR(64),
    gender INT,
    phone VARCHAR(16)
);

INSERT INTO user_info VALUES(NULL,'leo','z12345678','1998-02-08','zzz@163.com','1','15625354781');


CREATE TABLE candy_lunbo(
    cid INT PRIMARY KEY AUTO_INCREMENT,
       title VARCHAR(32),
      img  VARCHAR(128),
      href VARCHAR(128)
);

INSERT INTO candy_lunbo VALUES(NULL,'轮播1','lunbo/lunbo.jpg','index.html'),
                                (NULL,'轮播2','lunbo/lunbo1.jpg','index.html'),
                                (NULL,'轮播3','lunbo/lunbo2.jpg','index.html'),
                                (NULL,'轮播4','lunbo/lunbo4.jpg','index.html');

CREATE TABLE candy_index(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pname VARCHAR(40),
    price  DECIMAL(5,2),
    pic  VARCHAR(128),
    href VARCHAR(128),
    hot  INT
);

INSERT INTO candy_index VALUES
(NULL,'青旺草莓味西瓜味糖果奶糖水果味380g儿时怀旧零食','23','img/demo/use/watermelon.jpg','index.html','100'),
(NULL,'青旺草莓味西瓜味糖果奶糖水果味380g儿时怀旧零食','23','img/demo/use/watermelon.jpg','index.html','100'),
(NULL,'青旺草莓味西瓜味糖果奶糖水果味380g儿时怀旧零食','23','img/demo/use/TB2BK1tpiMnBKNjSZFzXXc_qVXa_!!725677994.jpg_430x430q90.jpg','index.html','100'),
(NULL,'董氏正宗百草秋梨膏糖清凉薄荷糖润喉糖砂板糖手工糖果','23','img/demo/use/董氏正宗百草秋梨膏糖清凉薄荷糖润喉糖砂板糖手工怀旧糖果小零食.jpg','index.html','100'),
(NULL,'德国糖果嘉云糖进口嘉云水果糖创意果汁硬糖','23','img/demo/use/德国糖果嘉云糖进口 嘉云水果糖创意果汁硬糖 966g.jpg','index.html','100'),
(NULL,'嘉云糖德国原装进口糖果罐装水果糖混合水果味','23','img/demo/use/嘉云糖德国原装进口糖果罐装水果糖混合水果味糖小零食.jpg','index.html','100'),
(NULL,'马来西亚进口水果糖果 Victory Fruit果超软糖 ','23','img/demo/use/马来西亚进口水果糖果 Victory Fruit果超软糖 .jpg','index.html','100'),
(NULL,'优果奶酥杏仁味奶糖扁桃仁糖奶脆牛奶糖','23','img/demo/use/优果奶酥杏仁味奶糖扁桃仁糖奶脆牛奶糖.jpg','index.html','100'),
(NULL,'创意星空星空棒棒糖创意糖果装饰糖果','23','img/demo/use/创意星空星空棒棒糖.jpg','index.html','100'),
(NULL,'大白兔奶糖香浓奶味380g儿时怀旧零食','23','img/demo/use/TB2wmIMbsaJ.eBjy0FbXXcwrFXa_!!2096729075.jpg_430x430q90.jpg','index.html','100'),
(NULL,'青旺薄荷味口哨糖奶糖薄荷味380g儿时怀旧','23','img/demo/use/TB249nVhIjI8KJjSsppXXXbyVXa_!!1772237474.jpg_430x430q90.jpg','index.html','100'),
(NULL,'嘉云糖德国原装进口糖果罐装水果糖混合水果味糖','23','img/demo/use/TB2IzQPDhWYBuNjy1zkXXXGGpXa_!!4012078930.jpg_430x430q90.jpg','index.html','100'),
(NULL,'旺仔QQ糖水果味软糖380g儿时怀旧零食','23','img/demo/use/TB2KplVd.EIL1JjSZFFXXc5kVXa_!!2096729075.jpg_430x430q90.jpg','index.html','100'),
(NULL,'青旺玉米糖果奶糖玉米味380g儿时怀旧零食','23','img/demo/use/timg (10).jpg','index.html','100');
