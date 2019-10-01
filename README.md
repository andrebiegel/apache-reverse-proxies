---
layout: post
title:  "Web Development: Configuration in UI: Experiences from an integration perspective"
---
This lenghty one tries to translate backend guidelines in configuration handling towards frontend development.. feel free to discuss or rant at ... gist url ;-)

Integrating web applications, operations comes into play .. and when placing the apps in their final environment, maybe new issues will be observed. 
I stumpled upon a few things, which i think should be emphasized. The first one i would highligtht is: Develop in a production-like environment.
It will definitely help you to proactively recognize risks. Only in environments with the proxy already in place and running, developers will have a chance to test. 
When placing proxies/gateways between the world and your application, url rewrites guarantee, that the app is functional from the outside. These nodes normally add needed functionalities (authentication, authorization, traffic conversion through net segments, ESI... ).  
But exactly this kind of work can be really messy for operations people, because, as i found out, ui developers seem to be creative, when requesting resources from servers. I found javascript (inline and external), concatenating url parts and loading resources.  

 I definitely would like to consider urls in markup languages as configuration. Handling configuration is a pretty old topic in software engineering and requires a concept, which fulfills the requirements the app has. 

The following guidelines exist when i do backend development .. (created by myself)
* configuration should be decoupled and hold in a defined syntax 
* hard coding is not an option
* every configurational item has a default value
* document the configuration options (operations guide, Component documentation)
* a configuration strategy has to be defined by the architect: it must specify: the allowed variants and the requirements it is going to address, it also provides answers to the following questions
  - How do modifications to configurations take action ? (static vs dynamic)
  - It is possible to override specific configuration ? How it is realized  ? (resolution order ) 
  - is any third party integration required  ? (maybe via JMX , REST ) 
  - Is a specific configuation tooling required  ? (e.g. to manage different stages in different teams )
  - is the strategy approved by operations ? (These are the guys, who have to use it all day.. )
  - Allows the strategy the minimal set of required variants ?  (if operations has to check 50 locations to set one configuration ... i wouldn´t want to visit them next time)
  - Is the Strategy documented in the architecture documentation ? 

  When reviewing my guidelines, not all of these might fit in the world of frontend development, but some do. The already tougth lesson is regarding decoupling, because if this urls would have been  normal html tags with src attributes (as a example), everything would have been fine. The next one seems to be not important at first glance. But the idea behind "do not hardcode" is "make it configurable and gather configuration at defined places", which is also a fundamental topic. By stepping through all of these, the ones that keep standing out are integration of external configuration sources and of specific third-party tooling. I have to confess that i cant imagine a use where even this would be needed in the spa/pwa world.



