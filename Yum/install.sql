drop schema if exists yum;
CREATE SCHEMA IF NOT EXISTS yum DEFAULT CHARACTER SET utf8;
USE yum;

CREATE TABLE user(
    id BIGINT NOT NULL AUTO_INCREMENT,
    last_name varchar(25),
	first_name varchar(25),
	email varchar(25) NOT NULL UNIQUE,
    role enum('hungry','chef','admin'),
    password varchar(60),
    registration_date date,
	approved bit,
	last_edit TIMESTAMP NULL  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	version INT NOT NULL  DEFAULT 0,
	secret VARCHAR(60), 
	secret_creation DATETIME,
	picture MEDIUMBLOB NULL DEFAULT NULL,
    PRIMARY KEY ( id )
);


CREATE TABLE food (
    food_id BIGINT NOT NULL AUTO_INCREMENT,
    food_name VARCHAR(100) NULL DEFAULT NULL,
    food_type ENUM('Main','Salad','Drink','Dessert'),
    description VARCHAR(250) NULL DEFAULT NULL,
    price DOUBLE NULL DEFAULT NULL,
    archived BOOLEAN,
	last_edit TIMESTAMP NULL  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	version INT NOT NULL  DEFAULT 0,
    PRIMARY KEY (food_id)
);


CREATE TABLE daily_menu (
  id BIGINT NOT NULL AUTO_INCREMENT,
  date date,
  final BIT(1) NOT NULL DEFAULT false,
  last_edit TIMESTAMP NULL  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  version INT NOT NULL  DEFAULT 0,
  PRIMARY KEY (id)
);
 

CREATE TABLE daily_order(
	id BIGINT NOT NULL AUTO_INCREMENT,
    final BIT(1) NOT NULL DEFAULT false,
    user_id BIGINT,
    dailymenu_id BIGINT,
	last_edit TIMESTAMP NULL  DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	version INT NOT NULL  DEFAULT 0,
    PRIMARY KEY (id)
      
);

ALTER TABLE daily_order ADD CONSTRAINT FOREIGN KEY(user_id) REFERENCES user(id);
ALTER TABLE daily_order ADD CONSTRAINT FOREIGN KEY(dailymenu_id) REFERENCES daily_menu(id);



CREATE TABLE order_item (
    food_id BIGINT,
    daily_order_id BIGINT,
    quantity INT,
    FOREIGN KEY (food_id) REFERENCES food(food_id),
    FOREIGN KEY (daily_order_id) REFERENCES daily_order(id)
);



CREATE TABLE `daily_menu_food` (
  `daily_menu_id` BIGINT NOT NULL,
  `food_id` BIGINT NOT NULL,
  PRIMARY KEY (`food_id`,`daily_menu_id`),
  KEY `daily_menu_id_idx` (`daily_menu_id`),
  CONSTRAINT `daily_menu_id` FOREIGN KEY (`daily_menu_id`) REFERENCES `daily_menu` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `food_id` FOREIGN KEY (`food_id`) REFERENCES `food` (`food_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
); 

CREATE TABLE yum_settings (
  `deadline` TIME NOT NULL,
  `currency` VARCHAR(30) NOT NULL,
  `notes` LONGTEXT NULL,
  `tos` LONGTEXT NULL,
  `policy` LONGTEXT NULL,
  `last_edit` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id` INT NOT NULL, 
  `version` INT NOT NULL DEFAULT 0,
  `foods_version` INT NOT NULL DEFAULT 0,
   PRIMARY KEY (`id`)
);

INSERT INTO `user` VALUES (1,'admin','admin','admin@yum.com','admin','$2a$10$94RawXgiAdX76VORM7MkRevNSYa8NzlVcQVPZJqaNNBdmrq62y3aa','2017-03-28','','2017-05-22 15:22:09',0,NULL,NULL,NULL);

INSERT INTO `yum_settings` VALUES ('13:00:00','&euro;','<p>All meals include slices of bread.</p>&#10;<p>Meals are delivered in a micorwave compatible plastic box. Disposable utensils are also included.</p>&#10;<p>Delivery time is 13:30.</p>&#10;<p>Payments will be collected by the reception desk. Mind to have the exact amount.</p>','<p><strong>Lorem Ipsum</strong>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the <em>1500s</em>, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>&#10;<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>&#10;<p>Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>','<p><strong>Contrary to popular belief</strong>,</p>&#10;<p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>&#10;<p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &#34;de Finibus Bonorum et Malorum&#34; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &#34;Lorem ipsum dolor sit amet..&#34;, comes from a line in section 1.10.32.</p>&#10;<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &#34;de Finibus Bonorum et Malorum&#34; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>','2017-05-19 14:01:29',1,0,0);
