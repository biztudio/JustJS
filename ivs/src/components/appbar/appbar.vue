<template>
<mu-appbar title="Dashboard Gauges">
  <mu-icon-button icon="menu" slot="left"/>
  
  <mu-icon-menu icon="more_vert" slot="right">
      <mu-menu-item title="Add Gauge"/>
      <mu-menu-item title="Edit Gauge"/>
      <mu-menu-item title="Remove Gauge"/>
      <mu-menu-item title="Only Warning Gauges">
           <mu-badge content="3" secondary slot="after"/>
      </mu-menu-item>    
    </mu-icon-menu>
</mu-appbar>
</template>
