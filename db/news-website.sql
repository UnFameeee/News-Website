CREATE DATABASE NEWS_WEBSITE;
USE NEWS_WEBSITE;

CREATE TABLE member(
	accountId NVARCHAR(500),
    email NVARCHAR(500),
    username NVARCHAR(500),
    password NVARCHAR(500),
    dateCreated NVARCHAR(500),
    role NVARCHAR(500),
    PRIMARY KEY(accountId)
);

CREATE TABLE viewer(
	accountId NVARCHAR(500) references member(accountId),
	name NVARCHAR(500),
    gender NVARCHAR(100),
    phone NVARCHAR(500),
    address NVARCHAR(500),
    birthDate NVARCHAR(500),
    profileImg NVARCHAR(500),
    PRIMARY KEY(accountId)
);

CREATE TABLE content_creator(
	accountId NVARCHAR(500) references member(accountId),
    name NVARCHAR(500),
    gender NVARCHAR(100),
    phone NVARCHAR(500),
    address NVARCHAR(500),
    birthDate NVARCHAR(500),
    profileImg NVARCHAR(500)
);

CREATE TABLE censor(
	accountId NVARCHAR(500) references member(accountId),
    name NVARCHAR(500),
    gender NVARCHAR(100),
    phone NVARCHAR(500),
    address NVARCHAR(500),
    birthDate NVARCHAR(500),
    profileImg NVARCHAR(500)
);

CREATE TABLE category(
	categoryId NVARCHAR(500),
    categoryName NVARCHAR(500),
    description NVARCHAR(2000)
);

CREATE TABLE article(
	articleId NVARCHAR(50000),
    title NVARCHAR(500),
    brief NVARCHAR(100),
    content NVARCHAR(500),
    author NVARCHAR(500),
    status NVARCHAR(500),
    categoryName NVARCHAR(500)
);

CREATE TABLE collection(
	collectionId NVARCHAR(500),
    viewerId NVARCHAR(500)
);

CREATE TABLE favorite_article(
	articleId NVARCHAR(500),
    viewerId NVARCHAR(500)
);