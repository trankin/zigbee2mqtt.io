---
title: "TuYa TS0601_switch control via MQTT"
description: "Integrate your TuYa TS0601_switch via Zigbee2MQTT with whatever smart home
 infrastructure you are using without the vendors bridge or gateway."
---

*To contribute to this page, edit the following
[file](https://github.com/Koenkk/zigbee2mqtt.io/blob/master/docs/devices/TS0601_switch.md)*

# TuYa TS0601_switch

| Model | TS0601_switch  |
| Vendor  | TuYa  |
| Description | 1, 2, 3 or 4 gang switch |
| Exposes | switch (state), linkquality |
| Picture | ![TuYa TS0601_switch](../images/devices/TS0601_switch.jpg) |
| White-label | Norklmes MKS-CM-W5, Somgoms ZSQB-SMB-ZB, Moes WS-EUB1-ZG, AVATTO ZGB-WS-EU |

## Notes

None


## Exposes

### Switch (l1 endpoint)
The current state of this switch is in the published state under the `state_l1` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l1": "ON"}`, `{"state_l1": "OFF"}` or `{"state_l1": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l1": ""}`.

### Switch (l2 endpoint)
The current state of this switch is in the published state under the `state_l2` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l2": "ON"}`, `{"state_l2": "OFF"}` or `{"state_l2": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l2": ""}`.

### Switch (l3 endpoint)
The current state of this switch is in the published state under the `state_l3` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l3": "ON"}`, `{"state_l3": "OFF"}` or `{"state_l3": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l3": ""}`.

### Switch (l4 endpoint)
The current state of this switch is in the published state under the `state_l4` property (value is `ON` or `OFF`).
To control this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/set` with payload `{"state_l4": "ON"}`, `{"state_l4": "OFF"}` or `{"state_l4": "TOGGLE"}`.
To read the current state of this switch publish a message to topic `zigbee2mqtt/FRIENDLY_NAME/get` with payload `{"state_l4": ""}`.

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
switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_l1 }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/l1/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_l2 }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/l2/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_l3 }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/l3/set"

switch:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    payload_off: "OFF"
    payload_on: "ON"
    value_template: "{{ value_json.state_l4 }}"
    command_topic: "zigbee2mqtt/<FRIENDLY_NAME>/l4/set"

sensor:
  - platform: "mqtt"
    state_topic: "zigbee2mqtt/<FRIENDLY_NAME>"
    availability_topic: "zigbee2mqtt/bridge/state"
    value_template: "{{ value_json.linkquality }}"
    unit_of_measurement: "lqi"
    icon: "mdi:signal"
```
{% endraw %}


