<template>
  <div class="home">
      <router-link to="/users" class="lead">User Management</router-link>

      <ul>

        <li v-for="employee  in employees.REIBLADE" :key="employee.name">
           Name:  {{ capitalize ( employee.name) }}<br>
           Weighted Rating : {{ employee.rating * employee.multiplier }}<br>
           PreferredName: {{ capitalize ( employee.preferredName) }}
           <hr />

        </li>
      </ul>
  </div>
</template>
<script>
export default {
    layout: null,
    data () {
        return {
            employees: {
                REIBLADE: [{
                    name: "Lorem",
                    preferredName: "Ipsum",
                    rating: 4,
                    multiplier: 2.5
                },{
                    name: "Dolor",
                    preferredName: "sit",
                    rating: 4,
                    multiplier: 2
                },{
                    name: "amet",
                    preferredName: "consectetur",
                    rating: 4,
                    multiplier: 1
                },{
                    name: "adipiscing",
                    preferredName: "elit",
                    rating: 4,
                    multiplier: 2
                },{
                    name: "facilisis",
                    preferredName: "semper",
                    rating: 4,
                    multiplier: 0.5
                },{
                    name: "enim",
                    preferredName: "eros",
                    rating: 4,
                    multiplier: 2
                },{
                    name: "feugiat",
                    preferredName: "NIBH",
                    rating: 4,
                    multiplier: 0.5
                },{
                    name: "dignissim",
                    preferredName: "pellentesque",
                    rating: 4,
                    multiplier: 1.5
                }],
                Qtis: [{
                    name: "Donec",
                    preferredName: "bibendum",
                    rating: 4,
                    multiplier: 1
                },{
                    name: "varius",
                    preferredName: "Pellentesque",
                    rating: 4,
                    multiplier: 1.5
                },{
                    name: "placerat",
                    preferredName: "placerat",
                    rating: 4,
                    multiplier: 2.5
                },{
                    name: "massa",
                    preferredName: "blandit",
                    rating: 4,
                    multiplier: 2
                },{
                    name: "Suspendisse",
                    preferredName: "Ipsum",
                    rating: 4,
                    multiplier: 1.5
                },{
                    name: "massa",
                    preferredName: "fringilla",
                    rating: 4,
                    multiplier: 0.5
                },{
                    name: "turpis",
                    preferredName: "tellus",
                    rating: 4,
                    multiplier: 2.5
                },{
                    name: "tincidunt",
                    preferredName: "facilisis",
                    rating: 4,
                    multiplier: 2
                }]
            }
        }
    },
    computed:  {
     capitalize: function(){
            return (string)=>{
              if  (!string)  {
                  return  "";
                }
              return string.charAt(0).toUpperCase() + string.slice(1);
        }
      }
  
  }
    
}
</script>