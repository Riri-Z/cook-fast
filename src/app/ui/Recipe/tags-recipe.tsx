import clsx from 'clsx';

type TagsRecipeProps = {
  tags: string[];
  variant?: string;
};

export default function TagsRecipe({
  tags,
  variant = 'badge-success',
}: Readonly<TagsRecipeProps>) {
  const Container = ({ tags }: { tags: string[] }) => {
    /* 
        -  sort pour afficher le plus court
        - si plus de trois, 
          j'affiche 2 => et un dernier on on affiche '3+ ' par exemple 
        - sinon on affiche les trois 
      
      */
    let sortedTags = tags.sort((a, b) => a.length - b.length);
    const tagslength = sortedTags.length;
    console.log('tagslength', tagslength);
    if (tagslength > 3) {
      sortedTags = sortedTags.slice(0, 2);
      sortedTags[2] = tagslength - 2 + '+';
    }
    console.log('sortedTags', sortedTags);
    return (
      <>
        {sortedTags.length > 0 ? (
          sortedTags.map((tag) => (
            <Badge key={tag} tag={tag} variant={variant} />
          ))
        ) : (
          <Badge tag="None" variant={variant} />
        )}
      </>
    );
  };

  return (
    <div className="flex flex-wrap gap-1">
      <Container tags={tags} />
    </div>
  );
}

function Badge({ tag, variant }: Readonly<{ tag: string; variant: string }>) {
  return (
    <p className={clsx('badge badge-outline text-bold max-w-fit ' + variant)}>
      {tag}
    </p>
  );
}
