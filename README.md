# Pokerparty

![](https://github.com/havesomepham/pokerparty/blob/main/images/changeview.gif)

A local multiplayer Texas Hold'em Poker app. You get the chips, we take care of the cards. A host device (TV, tablet, etc.) is needed for everyone to view community cards. Players receive cards on their individual devices.

How to run:
In HOME directory:
```bash
sudo npm install -g @angular/cli
git clone https://github.com/havesomepham/pokerparty.git
cd ~/pokerparty
npm install
sudo ng serve
```

How to run on mobile (mac instructions):
```bash
echo '{ "host": "0.0.0.0"}' >.ember-cli //first time only
ng serve --host 0.0.0.0
```
This should return two links. One for the local URL and the other network URL (comprised of host IP address + port number)
