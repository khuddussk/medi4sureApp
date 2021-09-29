import { ImageGallaryItem } from "./ImageGallaryItem";

export const ImageGallary = () => {
  return (
    <table>
      <tr>
        <td>
          <ImageGallaryItem
            wikiUrl="https://en.wikipedia.org/wiki/Shah_Rukh_Khan"
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/330px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg"
            title="Shahrukh Khan"
          />
        </td>
        <td>
          <ImageGallaryItem
            wikiUrl="https://en.wikipedia.org/wiki/Salman_Khan"
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/8/86/Salman_Khan_at_Renault_Star_Guild_Awards.jpg"
            title="Salman Khan"
          />
        </td>
        <td>
          <ImageGallaryItem
            wikiUrl="https://en.wikipedia.org/wiki/Madhuri_Dixit"
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Madhuri_Dixit_promoting_Total_Dhamaal_in_2019_%28cropped%29.jpg/330px-Madhuri_Dixit_promoting_Total_Dhamaal_in_2019_%28cropped%29.jpg"
            title="Madhuri Dixit"
          />
        </td>
        <td>
          <ImageGallaryItem
            wikiUrl="https://en.wikipedia.org/wiki/Sohail_Khan"
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sohail_Khan_Diwali_bash.jpg/220px-Sohail_Khan_Diwali_bash.jpg"
            title="Sohel Khan"
          />
        </td>
           <td>
          <ImageGallaryItem
            wikiUrl="https://en.wikipedia.org/wiki/Tiger_Shroff"
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Tiger_Shroff_in_2019.jpg/220px-Tiger_Shroff_in_2019.jpg"
            title="Tiger Shroff"
          />
        </td>
      </tr>
    </table>
  );
};
