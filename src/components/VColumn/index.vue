<template>
    <div :class="classList" class="column">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';

type Size = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export default {
    name: 'VColumn',

    props: {
        xs: {
            type: Number as PropType<Size>,
            default: -1,
        },

        sm: {
            type: Number as PropType<Size>,
            default: -1,
        },

        md: {
            type: Number as PropType<Size>,
            default: -1,
        },

        lg: {
            type: Number as PropType<Size>,
            default: -1,
        },

        xl: {
            type: Number as PropType<Size>,
            default: -1,
        },
    },

    computed: {
        classList() {
            const prefixes = ['xs', 'sm', 'md', 'lg', 'ls'];

            return [this.xs, this.sm, this.md, this.lg, this.ls]
                .map((value, index) => ({
                    className: `${prefixes[index]}-${value}`,
                    active: value > 0,
                }))
                .filter(({ active }) => active)
                .map(({ className }) => className);
        },
    },
};
</script>

<style lang="sass" scoped>
.column
    width: 100%
    display: flex
    padding: 0 1rem
    border: 1px solid #ddd
    background-color: #f5f5f5

    &.xs-1
        max-width: calc((1 / 12) * 100%)
    &.xs-2
        max-width: calc((2 / 12) * 100%)
    &.xs-3
        max-width: calc((3 / 12) * 100%)
    &.xs-4
        max-width: calc((4 / 12) * 100%)
    &.xs-5
        max-width: calc((5 / 12) * 100%)
    &.xs-6
        max-width: calc((6 / 12) * 100%)
    &.xs-7
        max-width: calc((7 / 12) * 100%)
    &.xs-8
        max-width: calc((8 / 12) * 100%)
    &.xs-9
        max-width: calc((9 / 12) * 100%)
    &.xs-10
        max-width: calc((10 / 12) * 100%)
    &.xs-11
        max-width: calc((11 / 12) * 100%)
    &.xs-12
        max-width: calc((12 / 12) * 100%)

@media screen and (min-width: 576px)
    .column
        &.sm-1
            max-width: calc((1 / 12) * 100%)
        &.sm-2
            max-width: calc((2 / 12) * 100%)
        &.sm-3
            max-width: calc((3 / 12) * 100%)
        &.sm-4
            max-width: calc((4 / 12) * 100%)
        &.sm-5
            max-width: calc((5 / 12) * 100%)
        &.sm-6
            max-width: calc((6 / 12) * 100%)
        &.sm-7
            max-width: calc((7 / 12) * 100%)
        &.sm-8
            max-width: calc((8 / 12) * 100%)
        &.sm-9
            max-width: calc((9 / 12) * 100%)
        &.sm-10
            max-width: calc((10 / 12) * 100%)
        &.sm-11
            max-width: calc((11 / 12) * 100%)
        &.sm-12
            max-width: calc((12 / 12) * 100%)

@media screen and (min-width: 768px)
    .column
        &.md-1
            max-width: calc((1 / 12) * 100%)
        &.md-2
            max-width: calc((2 / 12) * 100%)
        &.md-3
            max-width: calc((3 / 12) * 100%)
        &.md-4
            max-width: calc((4 / 12) * 100%)
        &.md-5
            max-width: calc((5 / 12) * 100%)
        &.md-6
            max-width: calc((6 / 12) * 100%)
        &.md-7
            max-width: calc((7 / 12) * 100%)
        &.md-8
            max-width: calc((8 / 12) * 100%)
        &.md-9
            max-width: calc((9 / 12) * 100%)
        &.md-10
            max-width: calc((10 / 12) * 100%)
        &.md-11
            max-width: calc((11 / 12) * 100%)
        &.md-12
            max-width: calc((12 / 12) * 100%)

@media screen and (min-width: 992px)
    .column
        &.lg-1
            max-width: calc((1 / 12) * 100%)
        &.lg-2
            max-width: calc((2 / 12) * 100%)
        &.lg-3
            max-width: calc((3 / 12) * 100%)
        &.lg-4
            max-width: calc((4 / 12) * 100%)
        &.lg-5
            max-width: calc((5 / 12) * 100%)
        &.lg-6
            max-width: calc((6 / 12) * 100%)
        &.lg-7
            max-width: calc((7 / 12) * 100%)
        &.lg-8
            max-width: calc((8 / 12) * 100%)
        &.lg-9
            max-width: calc((9 / 12) * 100%)
        &.lg-10
            max-width: calc((10 / 12) * 100%)
        &.lg-11
            max-width: calc((11 / 12) * 100%)
        &.lg-12
            max-width: calc((12 / 12) * 100%)

@media screen and (min-width: 1200px)
    .column
        &.xl-1
            max-width: calc((1 / 12) * 100%)
        &.xl-2
            max-width: calc((2 / 12) * 100%)
        &.xl-3
            max-width: calc((3 / 12) * 100%)
        &.xl-4
            max-width: calc((4 / 12) * 100%)
        &.xl-5
            max-width: calc((5 / 12) * 100%)
        &.xl-6
            max-width: calc((6 / 12) * 100%)
        &.xl-7
            max-width: calc((7 / 12) * 100%)
        &.xl-8
            max-width: calc((8 / 12) * 100%)
        &.xl-9
            max-width: calc((9 / 12) * 100%)
        &.xl-10
            max-width: calc((10 / 12) * 100%)
        &.xl-11
            max-width: calc((11 / 12) * 100%)
        &.xl-12
            max-width: calc((12 / 12) * 100%)
</style>