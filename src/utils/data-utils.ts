import { type CollectionEntry } from 'astro:content';
import { slugify } from './common-utils';

export function sortItemsByDateDesc(itemA: CollectionEntry<'stacks' | 'projects'>, itemB: CollectionEntry<'stacks' | 'projects'>) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

export function sortItemsById(itemA: CollectionEntry<'stacks' | 'projects'>, itemB: CollectionEntry<'stacks' | 'projects'>) {
    const idA = parseInt(itemA.id.split('-').pop() || '0');
    const idB = parseInt(itemB.id.split('-').pop() || '0');
    return idA - idB;
}

export function getAllTags(stacks: CollectionEntry<'stacks'>[]) {
    const tags: string[] = [...new Set(stacks.flatMap((stack) => stack.data.tags || []).filter(Boolean))];
    return tags
        .map((tag) => {
            return {
                name: tag,
                id: slugify(tag)
            };
        })
        .filter((obj, pos, arr) => {
            return arr.map((mapObj) => mapObj.id).indexOf(obj.id) === pos;
        });
}

export function getStacksByTag(stacks: CollectionEntry<'stacks'>[], tagId: string) {
    return stacks.filter((stack) =>
        (stack.data.tags || []).map((tag) => slugify(tag)).includes(tagId)
    );
}