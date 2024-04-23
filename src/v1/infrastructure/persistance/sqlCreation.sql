drop table if exists medias;
drop table if exists profiles;

create table profile(
  id int primary key auto_increment,
  username varchar(50) ,
  email varchar(50),
  description varchar(256),
  picture varchar(256),
  follow varchar(256)
);

insert into profile(username, email, description, picture, follow) 
  values 
  ("Carol Peletier", "Peletier@gmail.com", "WD charactere , female, alive", "43568.insta.com", ""),
  ("Beth Greene", "BG@gmail.com", "WD charactere , female, dead", "77ef5564.insta.com", ""),
  ("Glen Rhee","GR@gmail.com", "WD charactere , male, dead", "79865564.insta.com", ""),
  ("Rick Grimes","RG@gmail.com", "WD charactere , male, alive", "23456.insta.com", "");

create table media(
  id int primary key auto_increment,
  title varchar(50),
  description varchar(500),
  mediaURL varchar(256),
);

insert into media(title, description, mediaURL) 
  values 
    ("song", "best song of 2018", "1287.uu.com" ),
    ("video", "video clip of Summer 2018", "clip.2018.uu.com" ),
    ("video", "video clip of Summer 2019", "clip.2019.uu.com" ),
    ("video", "video clip of Summer 2020", "clip.2020.uu.com" ),
    ("video", "video clip of Summer 2021", "clip.2021.uu.com" )
