# Docker

TODO: sekcija o dokeru

## Instalacija

Kako bismo instalirali **Docker** najbolje je da pratimo 
oficijalnu dokumentaciju [Instalacija Dockera](https://docs.docker.com/engine/install/ubuntu/).

Nakon ovoga, potrebno je da omogućimo da `docker` komanda ne radi preko `sudo` komande, kako ne bi smo bespotrebno aktivirali `root` korisnika.

```
$ sudo groupadd docker
$ sudo usermod -aG docker $USER
```

Sada, treba da se odjavimo i prijavimo na sistem, ili izvrsimo:
```
$ newgrp docker 
```

Konačno, možemo izvršiti `docker` komandu bez prefiksa.
```
$ docker run hello-world
```

## Docker compose

Pored **Docker**-a, potreban nam je još jedan program za lakse upravljanje i orkestraciju ovih "Container"-a. 
`docker-compose` nam omogućava da ga kroz konfiguracioni fajl napravimo sve potrebne container-e bez ručnog pokretanja `docker`
komande.

Hajde da ga instaliramo:
```
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.28.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
```

Kako bi bili sigurni da je dostupan svuda u sistemu:
```
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

Sada možemo da ga koristimo:
```
$ docker-compose --version
docker-compose version 1.28.5, build 1110ad01
```
