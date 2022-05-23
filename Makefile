docker-up: memory
	docker-compose up -d

docker-down:
	docker-compose down

docker-build: memory
	docker-compose up --build -d

memory:
	sudo sysctl -w vm.max_map_count=262144

###################### Laravel
route:
	docker-compose exec php-cli php artisan route:cache

php-migrate:
	docker-compose exec php-cli php artisan migrate

composer:
	docker-compose exec php-cli composer install

dump:
	docker-compose exec php-cli composer dumpautoload

test:
	docker-compose exec php-cli vendor/bin/phpunit

queue:
	docker-compose exec php-cli php artisan queue:work


######################## Npm

npm:
	docker-compose exec npm npm install

build-production:
	docker-compose exec npm npm run build production

mix-watch:
	docker-compose exec npm npm run watch

mix-build:
	docker-compose exec npm npm run prod

