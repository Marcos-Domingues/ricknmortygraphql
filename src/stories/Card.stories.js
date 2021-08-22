import Card from '../components/Card/Card';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
     name: Name, image: Image, txt1: Txt1, txt2: Txt2
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card },
  template: '<my-card/>',
});

export const Name = Template.bind({});
Name.args = {
  name: 'My Card',
};

export const Image = Template.bind({});
Image.args = {
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
};

export const Txt1 = Template.bind({});
Txt1.args = {
  txt1: 'My Card',
};

export const Txt2 = Template.bind({});
Txt2.args = {
  txt2: 'My Card',
};