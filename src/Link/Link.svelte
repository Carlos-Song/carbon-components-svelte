<script>
  /**
   * Specify the size of the link
   * @type {"sm" | "lg"} [size]
   */
  export let size = undefined;

  /**
   * Specify the href value
   * @type {string} [href]
   */
  export let href = undefined;

  /**
   * Set to `true` to use the inline variant
   * @type {boolean} [inline=false]
   */
  export let inline = false;

  /**
   * Set to `true` to disable the checkbox
   * @type {boolean} [disabled=false]
   */
  export let disabled = false;

  /**
   * Set to `true` to allow visited styles
   * @type {boolean} [visited=false]
   */
  export let visited = false;

  /**
   * Obtain a reference to the top-level HTML element
   * @type {null | HTMLAnchorElement | HTMLParagraphElement} [ref=null]
   */
  export let ref = null;
</script>

{#if disabled}
  <p
    bind:this="{ref}"
    class:bx--link="{true}"
    class:bx--link--disabled="{disabled}"
    class:bx--link--inline="{inline}"
    class:bx--link--visited="{visited}"
    {...$$restProps}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
  >
    <slot />
  </p>
{:else}
  <!-- svelte-ignore a11y-missing-attribute -->
  <a
    bind:this="{ref}"
    class:bx--link="{true}"
    class:bx--link--disabled="{disabled}"
    class:bx--link--inline="{inline}"
    class:bx--link--visited="{visited}"
    class:bx--link--sm="{size === 'sm'}"
    class:bx--link--lg="{size === 'lg'}"
    rel="{$$restProps.target === '_blank' ? 'noopener noreferrer' : undefined}"
    href="{href}"
    {...$$restProps}
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
  >
    <slot />
  </a>
{/if}
