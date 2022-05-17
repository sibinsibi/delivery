    <template>
      <div class="container">
        <form class="row g-3">
          <div class="col-auto">
            <input type="text" v-model="user.name" placeholder="Name" class="form-control"/>
          </div>
          <div class="col-auto">
            <input type="text" v-model="user.age" placeholder="age" class="form-control"/>
          </div>
          <div class="col-auto">
            <input type="text" v-model="user.status" placeholder="status" class="form-control"/>
          </div>
          <div class="col-auto">
            <input type="button" @click="add_user()" :disabled="(user.name =='')" value="Add user" class="form-control btn btn-outline-info"/>
          </div>
        </form>
    
        <hr class="">    
        <h2 class="">Users in Vuex state</h2><br>

        <div class="form-check form-switch position-relative">
        <input class="form-control w-25 position-absolute top-50 start-50 translate-middle" type="text" v-model="searchQuery" placeholder="Search (Filter)" />

          <div class="position-absolute top-0 end-0">
            <input class="form-check-input " type="checkbox" id="flexSwitchCheckChecked" v-model="sortFlag" @change="sortUsers($event)">
           <label class="form-check-label" for="flexSwitchCheckChecked">Sort by name (mixins)</label>
          </div>
        </div>
        <br>

        <ol class="list-group list-group-numbered">
          <li class="list-group-item d-flex justify-content-between align-items-start mt-1"  v-for="(u, index) in userss" :key="index"
          v-bind:style=" !u.status ? 'border: 1px solid red;' : 'border: 1px solid green;' ">

            <div class="ms-2 me-auto">
              <div class="fw-bold">{{ u.name }}</div>
              Age: {{ u.age }}, Status: {{ u.status}}
            </div>
              <button type="button" class="btn-close btn-danger"  @click="delete_user(index)" aria-label="Close"></button>
          </li>
        </ol>

      </div>
    </template>

<script>
  import { filterUser }  from '../mixins/sort_filter'
  export default {
    name: 'HelloWorld',
    mixins: [filterUser],
    data () {
          return { 
            searchQuery: '',
            user: {
                name: '',
                age: '',
                status: 0,
                index:  this.$store.getters.users.length + 1
            }
          }
        },
        methods: {
          add_user: function(){
            this.$store.dispatch('ADD_USER', this.user);
            this.user =  {
                name: '',
                age: '',
                status: 0,
                created_at: '2017-10-01',
                index: this.$store.getters.users.length + 1
            }
          },
          delete_user: function(index){
            this.$store.dispatch('DELETE_USER', index);
          }
        },
        computed: {
          
          userss: function(){
            if(this.searchQuery){
            return this.$store.getters.users.filter((item)=>{
              return this.searchQuery.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
            })
            }else{
              return this.$store.getters.users;
            }
          }
        }  
  }
</script>
