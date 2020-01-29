<template>
<div>
    <div class="navigation-bar">
        <navigationbar/>
    </div>
    <div class="table">
            <at-table :columns="columns" :data="bookedSlots"></at-table>
    </div>
</div> 
</template>
<script>

import navigationbar from "../components/navigation-bar"
export default {
    name:"booked-slots",
    components:{
        navigationbar
    },
    data:()=>({
        columns:[
            {
                title:"Host",
                key:"host"
            },
              {
                title:"Start time",
                key:"starttime"
            },
              {
                title:"End time",
                key:"endtime"
            },
                //   {
                //     title:"",
                //    render:(h,params)=>{
                //        return h('div',[
                //            h('AtButton',{
                //                props:{
                //                    size:'small',
                //                    hollow:'true'
                //                },
                //                style:{
                //                    marginRight:'8px'
                //                },
                //                on:{
                //                    click:()=>{

                //                    }
                //                }
                //            },'Request')
                //        ])
                //    }
                // }
        ],
        bookedSlots:JSON.parse( localStorage.getItem('bookedSlots')),

    })
}
</script>