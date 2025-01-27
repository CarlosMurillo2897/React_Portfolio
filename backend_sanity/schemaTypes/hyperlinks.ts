export default{
    name:'hyperlinks',
    title:'Hyperlinks',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'href',
            title:'Href',
            type:'string'
        },
        {
            name:'content',
            title:'Content',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },      
    ]
}