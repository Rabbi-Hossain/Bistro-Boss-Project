
const SectionTitle = ({heading, subheading}) => {

    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-600 italic mb-2">---{subheading}---</p>
            <p className="text-3xl border-y-4 py-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;