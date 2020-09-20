# Online Monitoring

> Read data from KepServerEX* with mqtt and show it on the web page

To read data from KepServerEX you obviously need to download [KepServerEX](https://www.kepware.com/en-us/content-gates/ex-demo-download-content-gate/?product=d2239b8c-36f2-4d07-8fbd-e223d0e26bbf&gate=8a5e8dd5-6edf-4d68-aa36-72f97b11e612). You also need an mqtt server. You can download [Mosquitto](https://mosquitto.org/download/) and run it locally.

## Mosquitto MQTT
> After you download Mosquitto you need to change its configuration to read data over web. The conf file is pretty much self explanatory.
- Go to Program Files\mosquitto edit mosquitto.conf with any notepad program.
- Add these lines:
  - port 1883
  - listener 9001
  - protocol websockets 
  - allow_anonymous true (this allows anyone to listen your topics. You can also set password. )
  - log_type error
  - log_type warning
  - log_type notice
  - log_type information
- You can define destination for log file. If you don't define, it will write logs to console.
- Save the file. If you can't, try open it as administrator.
- If you installed mosquitto as a windows service, after saving the configuration file, restart the service.
- If you didn't install mosquitto as a windows service, run it from command line because when you run it from .exe it doesn't read configuration from the file. It starts with default configuration.
- Go to mosquitto directory ***cd C:\Program Files\mosquitto***, and write ***mosquitto -c mosquitto.conf***

## KepServer

> After you downloaded KepServer you need to do couple of things like defining a tag to read data. To do that follow these steps:

- Open KepServer and right click to ***Project>Connectivity*** and click ***New Channel***.
- Select ***Simulator*** from dropdown and click ***Next*** until finish and of course feel free to change channel name.
- Click to add a device and once again click ***Next*** until finish.
- ***Click to add a static tag***.
- Name the tag as ***Sensor1***.
- Click ***...*** in Address section and from the dialog box select ***RANDOM (Rate, Low Limit, High Limit) Float***
- Change Address section to ***RANDOM(1000,0,23)***
- Add another tag and name it ***Sensor2***
- Change Address section to ***RANDOM(1000,15,55)***
- Right click to ***IoT Gateway*** and click ***Add New Agent***. If you don't see IoT Gateway section, select ***View>IoT Gateway***, it will show up.
- Change type to ***MQTT Client*** and click ***Next***
- Change ***Topic*** to ***iotgateway/sensor1*** and ***Rate(ms)*** to ***1000***. Click ***Next***.
- Leave the Credentials section blank, click ***Finish***.
- Click ***Add IoT Items***. From the dialog, select the device that you created under the channel, select ***Sensor1*** and apply.
- Add another agent for ***Sensor2*** with applying the same steps.

****It is good to notify you that KepServer has a licence fee but you can use the demo version. Even if you have licence of KepServer, adding IoT Agent is an extra feature which means you also have to pay for that. I used KepServer to simulate PLC as if I am reading a sensor value from PLC but you don't have to do that you can create an application that publishes a random number to an mqtt topic.***

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
