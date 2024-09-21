# 使用 Nginx 作为 web 服务器
FROM nginx:latest

# 复制静态文件到容器
COPY dist /usr/share/nginx/html

# 设置默认页面
COPY default.conf /etc/nginx/conf.d/default.conf

# 设置工作目录
WORKDIR /usr/share/nginx/html