import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Input type for adding a new bike */
export type AddBikeInput = {
  /** Brand of the bike */
  brand: Scalars['String']['input'];
  /** Model of the bike */
  model: Scalars['String']['input'];
};

/** Input type for adding a new ride */
export type AddRideInput = {
  /** Identifier for the bike associated with the ride */
  bikeId: Scalars['Int']['input'];
  /** Distance covered in the ride */
  distance: Scalars['Float']['input'];
  /** Location where the ride took place */
  location: Scalars['String']['input'];
  /** Name of the ride */
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Represents a bike with its details */
export type Bike = {
  __typename?: 'Bike';
  /** Brand of the bike */
  brand: Scalars['String']['output'];
  /** Unique identifier for the bike */
  id: Scalars['Int']['output'];
  /** Model of the bike */
  model: Scalars['String']['output'];
  /** List of rides associated with the bike */
  rides: Array<Ride>;
};

/** Root mutation type for all the mutations that can be performed */
export type Mutation = {
  __typename?: 'Mutation';
  /** Adds a new bike using the provided input data */
  addBike: Bike;
  /** Adds a new ride using the provided input data */
  addRide: Ride;
};


/** Root mutation type for all the mutations that can be performed */
export type MutationAddBikeArgs = {
  input: AddBikeInput;
};


/** Root mutation type for all the mutations that can be performed */
export type MutationAddRideArgs = {
  input: AddRideInput;
};

/** Root query type for all the queries that can be performed */
export type Query = {
  __typename?: 'Query';
  /** Retrieves a specific bike by its ID */
  bike?: Maybe<Bike>;
  /** Retrieves a list of all bikes */
  bikes: Array<Bike>;
  /** Retrieves a specific ride by its ID */
  ride?: Maybe<Ride>;
  /** Retrieves a list of all rides */
  rides: Array<Ride>;
};


/** Root query type for all the queries that can be performed */
export type QueryBikeArgs = {
  id: Scalars['Int']['input'];
};


/** Root query type for all the queries that can be performed */
export type QueryRideArgs = {
  id: Scalars['Int']['input'];
};

/** Represents a ride with its details */
export type Ride = {
  __typename?: 'Ride';
  /** Identifier for the bike associated with the ride */
  bikeId: Scalars['Int']['output'];
  /** Distance covered in the ride */
  distance: Scalars['Float']['output'];
  /** Unique identifier for the ride */
  id: Scalars['Int']['output'];
  /** Location where the ride took place */
  location: Scalars['String']['output'];
  /** Name of the ride */
  name?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddBikeInput: AddBikeInput;
  AddRideInput: AddRideInput;
  Bike: ResolverTypeWrapper<Bike>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Ride: ResolverTypeWrapper<Ride>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddBikeInput: AddBikeInput;
  AddRideInput: AddRideInput;
  Bike: Bike;
  Boolean: Scalars['Boolean']['output'];
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  Ride: Ride;
  String: Scalars['String']['output'];
};

export type BikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bike'] = ResolversParentTypes['Bike']> = {
  brand?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rides?: Resolver<Array<ResolversTypes['Ride']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBike?: Resolver<ResolversTypes['Bike'], ParentType, ContextType, RequireFields<MutationAddBikeArgs, 'input'>>;
  addRide?: Resolver<ResolversTypes['Ride'], ParentType, ContextType, RequireFields<MutationAddRideArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  bike?: Resolver<Maybe<ResolversTypes['Bike']>, ParentType, ContextType, RequireFields<QueryBikeArgs, 'id'>>;
  bikes?: Resolver<Array<ResolversTypes['Bike']>, ParentType, ContextType>;
  ride?: Resolver<Maybe<ResolversTypes['Ride']>, ParentType, ContextType, RequireFields<QueryRideArgs, 'id'>>;
  rides?: Resolver<Array<ResolversTypes['Ride']>, ParentType, ContextType>;
};

export type RideResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ride'] = ResolversParentTypes['Ride']> = {
  bikeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  distance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Bike?: BikeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Ride?: RideResolvers<ContextType>;
};

