FROM ubuntu:18.04

RUN apt-get update && apt-get install -y && \
	apt-get upgrade -y && \
	apt-get install git -y && \
	apt-get install curl wget -y && apt-get install -y && \
	apt-get install gnupg -y && \
	apt-get clean

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
	apt-get install -y nodejs

ENV EMBERVERSION 2.18.2
ENV	BOWERVERSION 1.8.4

RUN npm update && \
	npm install -g ember-cli@${EMBERVERSION} && \
	npm install -g bower@${BOWERVERSION}

WORKDIR /app

LABEL bmipaas.version=0.0.11

RUN git clone https://github.com/AlfredYang1986/bm-data-ipaas.git && \
	git clone https://github.com/PharbersDeveloper/BP-Components.git 
	
WORKDIR /app/BP-Components

RUN git checkout -b frank origin/frank && \
	npm install && \
	npm link

WORKDIR /app/bm-data-ipaas

RUN npm install && \
	npm link bp-components && \
	bower install foundation --allow-root && \
	bower install ali-oss --allow-root && \
	bower install jsonapi-datastore --allow-root

RUN ember b -prod

EXPOSE 4200

ENTRYPOINT ["ember", "s", "--live-reload=false"]
