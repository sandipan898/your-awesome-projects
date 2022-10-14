const houses = [
    {
        _id:1,
        price:750,
        name:"Palm Harbor",
        location:"New Delhi,India",
        month:8,
        beds:4,
        bathroom:2,
        image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80",

        area:" 4 x 10",
        type:"House"
    },

    {
        _id:2,
        price:1550,
        name:"Dwarakamai",
        location:"Mumbai,India",
        month:9,
        beds:3,
        bathroom:2,
        image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80",

        area:" 3 x 10",
        type:"House"
    },
    {
        _id:3,
        price:1250,
        name:"Palm Harbor",
        location:"Hyderabad,India",
        month:7,
        beds:6,
        bathroom:4,
        area:" 10 x 20",
        image:"https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

        type:"House"
    },
    {
        _id:4,
        price:1550,
        name:"Palm Harbor",
        location:"Bangalore,India",
        month:6,
        beds:1,
        bathroom:1,
        area:" 1 x 10",
        image:"https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

        type:"Apartment"
    },
    
    {
        _id:5,
        price:750,
        name:"Kailash",
        location:"Hyderabad,India",
        month:5,
        beds:3,
        bathroom:2,
        area:" 3 x 10",
        image:"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80",

       
        type:"House"
    },
    
    {
        _id:6,
        price:1550,
        name:"Palm Harbor",
        location:"Bangalore,India",
        month:4,
        beds:2,
        bathroom:2,
        area:" 2 x 10",
        image:"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80",

     
        type:"Apartment"
    },
    {
        _id:7,
        price:1550,
        name:"My Palace",
        location:"Hyderabad,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

     
        type:"House"
    },
    {
        _id:8,
        price:900,
        name:"Kedarnath",
        location:"New Delhi,India",
        month:8,
        beds:6,
        bathroom:3,
        area:" 8 x 10",
        image:"https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

     
        type:"House"
    },
    
    {
        _id:9,
        price:1200,
        name:"Vaisno Devi",
        location:"Mumbai,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",

     
        type:"Apartment"
    },
    
    {
        _id:10,
        price:700,
        name:"Kashi",
        location:"Hyderabad,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",

     
        type:"House"
    },
    
    {
        _id:11,
        price:1800,
        name:"Place1",
        location:"New Delhi,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

     
        type:"House"
    },
    
    {
        _id:12,
        price:1900,
        name:"Place2",
        location:"Hyderabad,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

     
        type:"House"
    },
    
    {
        _id:13,
        price:1700,
        name:"Place3",
        location:"New Delhi,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",

     
        type:"Apartment"
    },
    
    {
        _id:14,
        price:1800,
        name:"Place4",
        location:"New Delhi,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

        type:"House"
    },
    
    {
        _id:15,
        price:700,
        name:"Place5",
        location:"Mumbai,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

        type:"Apartment"
    },
    
    {
        _id:16,
        price:1100,
        name:"Place6",
        location:"Bangalore,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1619216083420-6e54b895f730?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",

        type:"House"
    },
    
    {
        _id:17,
        price:1200,
        name:"Place7",
        location:"Bangalore,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1619216083420-6e54b895f730?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",

        type:"Apartment"
    },
    
    {
        _id:18,
        price:1700,
        name:"Place8",
        location:"Hyderabad,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

        type:"House"
    },
    
    {
        _id:19,
        price:1900,
        name:"Place9",
        location:"Mumbai,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:20,
        price:1100,
        name:"Place10",
        location:"Bangalore,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:21,
        price:1200,
        name:"Place11",
        location:"Bangalore,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:22,
        price:1300,
        name:"Place12",
        location:"New Delhi,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:23,
        price:1600,
        name:"Place13",
        location:"Mumbai,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        type:"Apartment"
    },
    
    {
        _id:24,
        price:1300,
        name:"Place14",
        location:"Mumbai,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1619216083420-6e54b895f730?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
        type:"House"
    },
    
    {
        _id:25,
        price:1400,
        name:"Place15",
        location:"Mumbai,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
        type:"House"
    },
    
    {
        _id:26,
        price:1900,
        name:"Place16",
        location:"Mumbai,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:27,
        price:900,
        name:"Place17",
        location:"Mumbai,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80",
        type:"House"
    },
    
    {
        _id:28,
        price:1800,
        name:"Place18",
        location:"New Delhi,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:29,
        price:1900,
        name:"Place19",
        location:"New Delhi,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80",
        type:"House"
    },
    {
        _id:30,
        price:700,
        name:"Place20",
        location:"New Delhi,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:31,
        price:700,
        name:"Place21",
        location:"New Delhi,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:32,
        price:700,
        name:"Place21",
        location:"New Delhi,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:33,
        price:700,
        name:"Place22",
        location:"New Delhi,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:34,
        price:700,
        name:"Place23",
        location:"New Delhi,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:35,
        price:750,
        name:"Place24",
        location:"New Delhi,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:36,
        price:800,
        name:"Place25",
        location:"New Delhi,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:37,
        price:950,
        name:"Place26",
        location:"New Delhi,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:38,
        price:600,
        name:"Place27",
        location:"New Delhi,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:39,
        price:770,
        name:"Place28",
        location:"New Delhi,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:40,
        price:870,
        name:"Place29",
        location:"New Delhi,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:41,
        price:870,
        name:"Place30",
        location:"New Delhi,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:42,
        price:870,
        name:"Place31",
        location:"New Delhi,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:43,
        price:1100,
        name:"Place32",
        location:"New Delhi,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:44,
        price:1200,
        name:"Place33",
        location:"New Delhi,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:45,
        price:1400,
        name:"Place34",
        location:"New Delhi,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:46,
        price:1300,
        name:"Place35",
        location:"New Delhi,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:47,
        price:1250,
        name:"Place36",
        location:"New Delhi,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:48,
        price:1100,
        name:"Place37",
        location:"New Delhi,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:49,
        price:1150,
        name:"Place38",
        location:"New Delhi,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:50,
        price:1300,
        name:"Place39",
        location:"New Delhi,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:51,
        price:1470,
        name:"Place40",
        location:"New Delhi,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:52,
        price:1270,
        name:"Place41",
        location:"New Delhi,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:53,
        price:1370,
        name:"Place42",
        location:"New Delhi,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:54,
        price:1150,
        name:"Place43",
        location:"New Delhi,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:55,
        price:1700,
        name:"Place44",
        location:"New Delhi,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:56,
        price:1800,
        name:"Place45",
        location:"New Delhi,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:57,
        price:1700,
        name:"Place46",
        location:"New Delhi,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:58,
        price:1900,
        name:"Place47",
        location:"New Delhi,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:59,
        price:1650,
        name:"Place48",
        location:"New Delhi,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:60,
        price:1800,
        name:"Place49",
        location:"New Delhi,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:61,
        price:1950,
        name:"Place50",
        location:"New Delhi,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:62,
        price:1600,
        name:"Place51",
        location:"New Delhi,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:63,
        price:1770,
        name:"Place52",
        location:"New Delhi,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:64,
        price:1870,
        name:"Place53",
        location:"New Delhi,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:65,
        price:1850,
        name:"Place54",
        location:"New Delhi,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:66,
        price:1970,
        name:"Place55",
        location:"New Delhi,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
   
    
    {
        _id:67,
        price:700,
        name:"Place56",
        location:"New Delhi,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:68,
        price:700,
        name:"Place57",
        location:"New Delhi,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:69,
        price:700,
        name:"Place58",
        location:"New Delhi,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:70,
        price:700,
        name:"Place59",
        location:"New Delhi,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:71,
        price:750,
        name:"Place60",
        location:"New Delhi,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:72,
        price:800,
        name:"Place61",
        location:"New Delhi,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:73,
        price:950,
        name:"Place61",
        location:"New Delhi,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:74,
        price:600,
        name:"Place62",
        location:"New Delhi,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:75,
        price:770,
        name:"Place63",
        location:"New Delhi,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:76,
        price:870,
        name:"Place64",
        location:"New Delhi,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:77,
        price:870,
        name:"Place65",
        location:"New Delhi,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:78,
        price:870,
        name:"Place66",
        location:"New Delhi,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:79,
        price:1100,
        name:"Place67",
        location:"New Delhi,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:80,
        price:1200,
        name:"Place68",
        location:"New Delhi,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:81,
        price:1400,
        name:"Place69",
        location:"New Delhi,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:82,
        price:1300,
        name:"Place70",
        location:"New Delhi,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:83,
        price:1250,
        name:"Place71",
        location:"New Delhi,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:84,
        price:1100,
        name:"Place72",
        location:"New Delhi,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:85,
        price:1150,
        name:"Place73",
        location:"New Delhi,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:86,
        price:1300,
        name:"Place74",
        location:"New Delhi,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:87,
        price:1470,
        name:"Place75",
        location:"New Delhi,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:88,
        price:1270,
        name:"Place76",
        location:"New Delhi,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:89,
        price:1370,
        name:"Place77",
        location:"New Delhi,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:90,
        price:1150,
        name:"Place78",
        location:"New Delhi,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:91,
        price:1700,
        name:"Place79",
        location:"New Delhi,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:92,
        price:1800,
        name:"Place80",
        location:"New Delhi,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:93,
        price:1700,
        name:"Place81",
        location:"New Delhi,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:94,
        price:1900,
        name:"Place82",
        location:"New Delhi,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:95,
        price:1650,
        name:"Place83",
        location:"New Delhi,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:96,
        price:1800,
        name:"Place84",
        location:"New Delhi,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:97,
        price:1950,
        name:"Place85",
        location:"New Delhi,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:98,
        price:1600,
        name:"Place86",
        location:"New Delhi,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:99,
        price:1770,
        name:"Place87",
        location:"New Delhi,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:100,
        price:1870,
        name:"Place88",
        location:"New Delhi,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:101,
        price:1850,
        name:"Place89",
        location:"New Delhi,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:102,
        price:1970,
        name:"Place90",
        location:"New Delhi,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
   
    {
        _id:103,
        price:700,
        name:"Place21",
        location:"Hyderabad,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:104,
        price:700,
        name:"Place21",
        location:"Hyderabad,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:105,
        price:700,
        name:"Place22",
        location:"Hyderabad,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:106,
        price:700,
        name:"Place23",
        location:"Hyderabad,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:107,
        price:750,
        name:"Place24",
        location:"Hyderabad,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:108,
        price:800,
        name:"Place25",
        location:"Hyderabad,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:109,
        price:950,
        name:"Place26",
        location:"Hyderabad,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:110,
        price:600,
        name:"Place27",
        location:"Hyderabad,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:111,
        price:770,
        name:"Place28",
        location:"Hyderabad,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:112,
        price:870,
        name:"Place29",
        location:"Hyderabad,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:113,
        price:870,
        name:"Place30",
        location:"Hyderabad,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:114,
        price:870,
        name:"Place31",
        location:"Hyderabad,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:115,
        price:1100,
        name:"Place32",
        location:"Hyderabad,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:116,
        price:1200,
        name:"Place33",
        location:"Hyderabad,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:117,
        price:1400,
        name:"Place34",
        location:"Hyderabad,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:118,
        price:1300,
        name:"Place35",
        location:"Hyderabad,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:119,
        price:1250,
        name:"Place36",
        location:"Hyderabad,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:120,
        price:1100,
        name:"Place37",
        location:"Hyderabad,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:121,
        price:1150,
        name:"Place38",
        location:"Hyderabad,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:122,
        price:1300,
        name:"Place39",
        location:"Hyderabad,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:123,
        price:1470,
        name:"Place40",
        location:"Hyderabad,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:124,
        price:1270,
        name:"Place41",
        location:"Hyderabad,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:125,
        price:1370,
        name:"Place42",
        location:"Hyderabad,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:126,
        price:1150,
        name:"Place43",
        location:"Hyderabad,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:127,
        price:1700,
        name:"Place44",
        location:"Hyderabad,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:128,
        price:1800,
        name:"Place45",
        location:"Hyderabad,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:129,
        price:1700,
        name:"Place46",
        location:"Hyderabad,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:130,
        price:1900,
        name:"Place47",
        location:"Hyderabad,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:131,
        price:1650,
        name:"Place48",
        location:"Hyderabad,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:132,
        price:1800,
        name:"Place49",
        location:"Hyderabad,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:133,
        price:1950,
        name:"Place50",
        location:"Hyderabad,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:134,
        price:1600,
        name:"Place51",
        location:"Hyderabad,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:135,
        price:1770,
        name:"Place52",
        location:"Hyderabad,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:136,
        price:1870,
        name:"Place53",
        location:"Hyderabad,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:137,
        price:1850,
        name:"Place54",
        location:"Hyderabad,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:138,
        price:1970,
        name:"Place55",
        location:"Hyderabad,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    
    {
        _id:139,
        price:700,
        name:"Place56",
        location:"Hyderabad,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:140,
        price:700,
        name:"Place57",
        location:"Hyderabad,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:141,
        price:700,
        name:"Place58",
        location:"Hyderabad,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:142,
        price:700,
        name:"Place59",
        location:"Hyderabad,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:143,
        price:750,
        name:"Place60",
        location:"Hyderabad,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:144,
        price:800,
        name:"Place61",
        location:"Hyderabad,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:145,
        price:950,
        name:"Place61",
        location:"Hyderabad,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:146,
        price:600,
        name:"Place62",
        location:"Hyderabad,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:147,
        price:770,
        name:"Place63",
        location:"Hyderabad,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:148,
        price:870,
        name:"Place64",
        location:"Hyderabad,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:149,
        price:870,
        name:"Place65",
        location:"Hyderabad,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:150,
        price:870,
        name:"Place66",
        location:"Hyderabad,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:151,
        price:1100,
        name:"Place67",
        location:"Hyderabad,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:152,
        price:1200,
        name:"Place68",
        location:"Hyderabad,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:153,
        price:1400,
        name:"Place69",
        location:"Hyderabad,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:154,
        price:1300,
        name:"Place70",
        location:"Hyderabad,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:155,
        price:1250,
        name:"Place71",
        location:"Hyderabad,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:156,
        price:1100,
        name:"Place72",
        location:"Hyderabad,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:157,
        price:1150,
        name:"Place73",
        location:"Hyderabad,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:158,
        price:1300,
        name:"Place74",
        location:"Hyderabad,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:159,
        price:1470,
        name:"Place75",
        location:"Hyderabad,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:160,
        price:1270,
        name:"Place76",
        location:"Hyderabad,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:161,
        price:1370,
        name:"Place77",
        location:"Hyderabad,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:162,
        price:1150,
        name:"Place78",
        location:"Hyderabad,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:163,
        price:1700,
        name:"Place79",
        location:"Hyderabad,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:164,
        price:1800,
        name:"Place80",
        location:"Hyderabad,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:165,
        price:1700,
        name:"Place81",
        location:"Hyderabad,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:166,
        price:1900,
        name:"Place82",
        location:"Hyderabad,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:167,
        price:1650,
        name:"Place83",
        location:"Hyderabad,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:168,
        price:1800,
        name:"Place84",
        location:"Hyderabad,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:169,
        price:1950,
        name:"Place85",
        location:"Hyderabad,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:170,
        price:1600,
        name:"Place86",
        location:"Hyderabad,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:171,
        price:1770,
        name:"Place87",
        location:"Hyderabad,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:172,
        price:1870,
        name:"Place88",
        location:"Hyderabad,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:173,
        price:1850,
        name:"Place89",
        location:"Hyderabad,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:174,
        price:1970,
        name:"Place90",
        location:"Hyderabad,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:175,
        price:700,
        name:"Place21",
        location:"Mumbai,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:176,
        price:700,
        name:"Place21",
        location:"Mumbai,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:177,
        price:700,
        name:"Place22",
        location:"Mumbai,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:178,
        price:700,
        name:"Place23",
        location:"Mumbai,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:179,
        price:750,
        name:"Place24",
        location:"Mumbai,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:180,
        price:800,
        name:"Place25",
        location:"Mumbai,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:181,
        price:950,
        name:"Place26",
        location:"Mumbai,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:182,
        price:600,
        name:"Place27",
        location:"Mumbai,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:183,
        price:770,
        name:"Place28",
        location:"Mumbai,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:184,
        price:870,
        name:"Place29",
        location:"Mumbai,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:185,
        price:870,
        name:"Place30",
        location:"Mumbai,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:186,
        price:870,
        name:"Place31",
        location:"Mumbai,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:187,
        price:1100,
        name:"Place32",
        location:"Mumbai,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:188,
        price:1200,
        name:"Place33",
        location:"Mumbai,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:189,
        price:1400,
        name:"Place34",
        location:"Mumbai,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:190,
        price:1300,
        name:"Place35",
        location:"Mumbai,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:191,
        price:1250,
        name:"Place36",
        location:"Mumbai,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:192,
        price:1100,
        name:"Place37",
        location:"Mumbai,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:246,
        price:1150,
        name:"Place38",
        location:"Mumbai,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:193,
        price:1300,
        name:"Place39",
        location:"Mumbai,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:194,
        price:1470,
        name:"Place40",
        location:"Mumbai,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:195,
        price:1270,
        name:"Place41",
        location:"Mumbai,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:196,
        price:1370,
        name:"Place42",
        location:"Mumbai,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:197,
        price:1150,
        name:"Place43",
        location:"Mumbai,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:198,
        price:1700,
        name:"Place44",
        location:"Mumbai,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:199,
        price:1800,
        name:"Place45",
        location:"Mumbai,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:200,
        price:1700,
        name:"Place46",
        location:"Mumbai,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:201,
        price:1900,
        name:"Place47",
        location:"Mumbai,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:202,
        price:1650,
        name:"Place48",
        location:"Mumbai,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:203,
        price:1800,
        name:"Place49",
        location:"Mumbai,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:204,
        price:1950,
        name:"Place50",
        location:"Mumbai,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:205,
        price:1600,
        name:"Place51",
        location:"Mumbai,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:206,
        price:1770,
        name:"Place52",
        location:"Mumbai,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:207,
        price:1870,
        name:"Place53",
        location:"Mumbai,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    {
        _id:208,
        price:1850,
        name:"Place54",
        location:"Mumbai,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    {
        _id:209,
        price:1970,
        name:"Place55",
        location:"Mumbai,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"House"
    },
    
    
    {
        _id:210,
        price:700,
        name:"Place56",
        location:"Mumbai,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:211,
        price:700,
        name:"Place57",
        location:"Mumbai,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:212,
        price:700,
        name:"Place58",
        location:"Mumbai,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:213,
        price:700,
        name:"Place59",
        location:"Mumbai,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:214,
        price:750,
        name:"Place60",
        location:"Mumbai,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:215,
        price:800,
        name:"Place61",
        location:"Mumbai,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:216,
        price:950,
        name:"Place61",
        location:"Mumbai,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:217,
        price:600,
        name:"Place62",
        location:"Mumbai,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:218,
        price:770,
        name:"Place63",
        location:"Mumbai,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:219,
        price:870,
        name:"Place64",
        location:"Mumbai,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:220,
        price:870,
        name:"Place65",
        location:"Mumbai,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:221,
        price:870,
        name:"Place66",
        location:"Mumbai,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:222,
        price:1100,
        name:"Place67",
        location:"Mumbai,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:223,
        price:1200,
        name:"Place68",
        location:"Mumbai,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:224,
        price:1400,
        name:"Place69",
        location:"Mumbai,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:225,
        price:1300,
        name:"Place70",
        location:"Mumbai,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:226,
        price:1250,
        name:"Place71",
        location:"Mumbai,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:227,
        price:1100,
        name:"Place72",
        location:"Mumbai,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:228,
        price:1150,
        name:"Place73",
        location:"Mumbai,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:229,
        price:1300,
        name:"Place74",
        location:"Mumbai,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:230,
        price:1470,
        name:"Place75",
        location:"Mumbai,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:231,
        price:1270,
        name:"Place76",
        location:"Mumbai,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:232,
        price:1370,
        name:"Place77",
        location:"Mumbai,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:233,
        price:1150,
        name:"Place78",
        location:"Mumbai,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:234,
        price:1700,
        name:"Place79",
        location:"Mumbai,India",
        month:1,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:235,
        price:1800,
        name:"Place80",
        location:"Mumbai,India",
        month:2,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:236,
        price:1700,
        name:"Place81",
        location:"Mumbai,India",
        month:3,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:237,
        price:1900,
        name:"Place82",
        location:"Mumbai,India",
        month:4,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:238,
        price:1650,
        name:"Place83",
        location:"Mumbai,India",
        month:5,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:239,
        price:1800,
        name:"Place84",
        location:"Mumbai,India",
        month:6,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:240,
        price:1950,
        name:"Place85",
        location:"Mumbai,India",
        month:7,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:241,
        price:1600,
        name:"Place86",
        location:"Mumbai,India",
        month:8,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:242,
        price:1770,
        name:"Place87",
        location:"Mumbai,India",
        month:9,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:243,
        price:1870,
        name:"Place88",
        location:"Mumbai,India",
        month:10,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    {
        _id:244,
        price:1850,
        name:"Place89",
        location:"Mumbai,India",
        month:11,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    {
        _id:245,
        price:1970,
        name:"Place90",
        location:"Mumbai,India",
        month:12,
        beds:4,
        bathroom:2,
        area:" 4 x 10",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type:"Apartment"
    },
    
    
    
];
module.exports = houses;