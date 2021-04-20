# 使用

### 一、docker搭建MongoDB

```bash
# 建立本地 mongo 目录
mkdir mongo

# 初始化脚本
mkdir mongo/initdb

# 数据库保存文件夹
mkdir mongo/datadir

# 数据库服务设置
mkdir mongo/configdb
```

##### 新建docker-compose.yml

```bash
# 打开docker-compose.yml文件进行编辑
nano docker-compose.yml
```

拷贝以下内容

```yml
version: "3"

services:
  mongo:
    image: mongo:latest
    container_name: mongo
    restart: always
    ports:
      - 27017:27017
    command: --auth
    volumes:
      - ./mongo/initdb:/docker-entrypoint-initdb.d
      - ./mongo/datadir:/data/db
      - ./mongo/configdb:/data/configdb
    environment:
      MONGO_INITDB_ROOT_USERNAME: xushizhao
      MONGO_INITDB_ROOT_PASSWORD: xushizhao
      MONGO_INITDB_DATABASE: mydb
      TZ: Asia/Tokyo
  mongo-express:
    image: mongo-express
    restart: always
    ports:
      - 8081:8081
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: xushizhao
      ME_CONFIG_MONGODB_ADMINPASSWORD: xushizhao

```

```bash
# 编译服务
docker-compose build

# 容器启动
docker-compose up -d
```

```bash
# 打开终端输入
docker ps -a

# 可以看见以下内容
CONTAINER ID   IMAGE           COMMAND                  CREATED       STATUS             PORTS                      NAMES
59e3ddd4d8b5   mongo:latest    "docker-entrypoint.s…"   10 days ago   Up About an hour   0.0.0.0:27017->27017/tcp   mongo
1060b874e482   mongo-express   "tini -- /docker-ent…"   10 days ago   Up About an hour   0.0.0.0:8081->8081/tcp     db_mongo-express_1
```

打开浏览器，输入localhost:8081，看到Mongo Express内容表明搭建成功！

### 二、启动backend

```bash
# 进入backend目录
cd backend/

# 安装依赖
npm install 或 yarn

# 启动项目
npm run start 或 yarn start
```

三、启动frontend

```bash
# 进入react-news-manage目录
cd react-news-manage/

# 安装依赖
npm install 或 yarn

# 启动项目
npm run dev 或 yarn dev
```

