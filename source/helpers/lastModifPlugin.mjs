export const lastModif = (schema, options) => {
    schema.add({ modified: Date });
    schema.pre('save', function(next) {
        // eslint-disable-next-line
        this.modified = new Date();
        next();
    });

    if (options && options.index) {
        schema.path('modified').index(options.index);
    }
};
