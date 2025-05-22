import clsx from 'clsx';

type TagsRecipeProps = {
  tags: string[];
  variant?: string;
};

export default function TagsRecipe({
  tags,
  variant = 'badge-success',
}: Readonly<TagsRecipeProps>) {
  return (
    <div className="flex flex-wrap gap-1">
      {tags.length > 0 ? (
        tags.map((tag) => <Badge key={tag} tag={tag} variant={variant} />)
      ) : (
        <Badge tag="None" variant={variant} />
      )}
    </div>
  );
}

function Badge({ tag, variant }: Readonly<{ tag: string; variant: string }>) {
  return (
    <p className={clsx('badge badge-outline  text-bold max-w-fit ' + variant)}>
      {tag}
    </p>
  );
}
