---
title: "IKEA ICTC-G-1 control via MQTT"
description: "Integrate your IKEA ICTC-G-1 via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/ICTC-G-1.md)*

# IKEA ICTC-G-1

| Model | ICTC-G-1  |
| Vendor  | IKEA  |
| Description | TRADFRI wireless dimmer |
| Exposes | battery, action, linkquality |
| Picture | ![IKEA ICTC-G-1](../images/devices/ICTC-G-1.jpg) |

## Notes


### Pairing
To factory reset the TRADFRI wireless dimmer (ICTC-G-1) press the button
4 times (so the red lights starts blinking).
After the blinks you might be willing to rotate the dimmer
like you are trying to control your lights. It will prevent the device
from going to sleep and ensure successful pairing. In case the dimmer was
recognized but no actions seems to be detected, try to restart Zigbee2MQTT.
See [IKEA TRADFRI wireless dimmer (ICTC-G-1) not pairing](https://github.com/Koenkk/zigbee2mqtt/issues/620).


### Legacy integration
By default (for backwards compatibility purposes) the legacy integration is enabled.
For new users it is recommended to **disable** this as it has several fundamental problems.
To disable the legacy integration add the following to your `configuration.yaml`:

{% raw %}
```yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    legacy: false
```
{% endraw %}


The information below only applies to the legacy integration.

### Recommendation
This device sends multiple messages in short time period with the same payload. It's worth setting `debounce` option with `debounce_ignore: - action` to throttle them without losing unique action payloads.

E.g. (devices.yaml)

{% raw %}
```yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    debounce: 0.5
    debounce_ignore:
    - action
```
{% endraw %}

To find optimal "smoothness" play with debounce time or if you need all unique rotation steps consider adding `brightness` to `debounce_ignore` option

{% raw %}
```yaml
'0xabc457fffe679xyz':
    friendly_name: my_remote
    debounce: 0.1
    debounce_ignore:
    - action
    - brightness
```
{% endraw %}

### Device type specific configuration
*[How to use device type specific configuration](../information/configuration.md)*

* `legacy`: Set to `false` to disable the legacy integration (highly recommended!) (default: true)


* `simulated_brightness`: Set to `true` to simulate a `brightness` value (default: `false`).
If this device provides a `brightness_move_up` or `brightness_move_down` action it is possible to specify the update
interval and delta. This can be done by instead of specifying `true`:

```yaml
simulated_brightness:
  delta: 20 # delta per interval, default = 20
  interval: 200 # interval in milliseconds, default = 200
```


## OTA updates
This device supports OTA updates, for more information see [OTA updates](../information/ota_updates.md).


## Exposes

### Battery (numeric)
Remaining battery in %.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.

### Action (enum)
Triggered action (e.g. a button click).
Value can be found in the published state on the `action` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The possible values are: `brightness_move_up`, `brightness_move_down`, `brightness_stop`, `brightness_move_to_level`.

### Linkquality (numeric)
Link quality (signal strength).
Value can be found in the published state on the `linkquality` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `255`.
The unit of this value is `lqi`.

## Manual Home Assistant configuration
Although Home Assistant integration through [MQTT discovery](../integration/home_assistant) is preferred,
manual integration is possible with the following configuration:


{% raw %}
```yaml
sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    unit_of_measurement: "brightness"
    icon: "mdi:brightness-5"
    value_template: "{{ value_json.brightness }}"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.battery }}"
    unit_of_measurement: "%"
    device_class: "battery"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.action }}"
    icon: "mdi:gesture-double-tap"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    icon: "mdi:signal"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    icon: "mdi:update"
    value_template: "{{ value_json['update']['state'] }}"

binary_sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_on: true
    payload_off: false
    value_template: "{{ value_json.update_available}}"
```
{% endraw %}


