type TagsRecipeProps = {
  tags: string[];
};

export default function TagsRecipe({ tags }: Readonly<TagsRecipeProps>) {
  return (
    <div className="flex flex-wrap gap-1">
      {tags.length > 0 ? (
        tags.map((tag) => <Badge key={tag} tag={tag} />)
      ) : (
        <Badge tag="None" />
      )}
    </div>
  );
}

function Badge({ tag }: Readonly<{ tag: string }>) {
  return (
    <p className="badge badge-success badge-outline  text-bold max-w-fit">
      {tag}
    </p>
  );
}
