# Use nginx alpine as base image for minimal size
FROM nginx:alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy main website files
COPY index.html /usr/share/nginx/html/
COPY html/ /usr/share/nginx/html/html/
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY res/ /usr/share/nginx/html/res/

# Copy bootstrap icons from node_modules (only the font files needed)
COPY node_modules/bootstrap-icons/font/ /usr/share/nginx/html/node_modules/bootstrap-icons/font/

# Expose port 80
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
