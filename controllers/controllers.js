const axios=require("axios");
const cheerio = require('cheerio');

const fetchAll= async(req,res)=>{
    try {
        const articles = [];
        const newspaper = {  
            name: 'unep',
            address: 'https://www.unep.org/news-and-stories'
        };
        const response = await axios.get(newspaper.address);
        const html = response.data;
        const $ = cheerio.load(html);

        $('.news_whitearea_item').each(function(index,element) {
            const title = $(element).find('a').text();
            const url = 'https://www.unep.org/' + $(element).find('a').attr('href');
            const imageUrl = $(element).find('img').attr('src');
            const dateAndType = $(element).find('.news_whitearea_item_text_meta').text().trim();
            
            //const title = $(element).find('a').text().trim();

            articles.push({
                title,
                url,
                imageUrl,
                dateAndType,
                
            });
        });

        return res.json(articles);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
};

module.exports = {
    fetchAll
}