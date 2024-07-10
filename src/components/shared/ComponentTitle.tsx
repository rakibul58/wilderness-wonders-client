type TComponentTitleProps = {
  title: string;
  subTitle: string;
};

const ComponentTitle = ({ title, subTitle }: TComponentTitleProps) => {
  return (
    <div>
      <h2 className="text-center font-bold text-4xl text-primary">{title}</h2>
      <h3 className="text-center font-bold text-lg text-secondary dark:text-stone-400 mt-4 mb-10">
        {subTitle}
      </h3>
    </div>
  );
};

export default ComponentTitle;
